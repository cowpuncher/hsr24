/*global require*/
"use strict";

var gulp = require('gulp'),
    path = require('path'),
    data = require('gulp-data'),
    twig = require('gulp-twig'), // Decided to use twig, because already familiar with it
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    wiredep = require('wiredep').stream,
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    prompt = require('gulp-prompt'),
    util = require('gulp-util'),
    fs = require('fs'),
    run = require('gulp-run'),
    del = require('del'),
    bower = require('bower'),
    args = require('yargs').argv,
    _ = require('lodash');

var svgSprite = require('gulp-svg-sprite'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace');

const webpackConfig = require(`./webpack.config.js`);
const webpackStream = require('webpack-stream');
const reload = browserSync.reload;

webpackConfig.watch = true;

var srcFolder     = './app/';
var srcAssets     = './app/assets/';
var srcData       = './app/json-data/';
var srcComponents = './app/components/';
var distFolder    = './build/';
var bowerDir      = './bower_components';

var notResult = [];
var tasks = [];

var bowerFile = 'bower.json';
var libs = srcComponents + 'libs.js';
var main = srcComponents + 'main.js';

var deleteDeps = function (deps, cb) {
	var path = bower.config.cwd + "/" + bower.config.directory;
	_.each(deps, function (dep) {
		del(path + "/" + dep, function (e) {});
	});
	cb();
};

var bowerTask = function (fn, cb) {
	var deps = _.chain(require(bower.config.cwd + '/bower.json').dependencies).keys().value();
	var pkgs = [];
	bower.commands[fn](deps)
		.on('log', function (o) {
			if (o.id !== 'install') {
				return;
			}
			pkgs.push(o.data.endpoint.name);
		})
		.on('end', function (installed) {
			deleteDeps(_.difference(pkgs, deps), cb);
		});
};

gulp.task('twig', function () {
    return gulp.src([srcFolder + 'page/*.twig'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
            }})
        )
        .pipe(data(function (file) {
            return JSON.parse(fs.readFileSync(srcData + path.basename(file.path, '.twig') + '.json'));
        }))
        .pipe(
            twig().on('error', function (err) {
                process.stderr.write(err.message + '\n');
            })
        )
        .pipe(gulp.dest(distFolder));
});

gulp.task('rebuild', ['twig'], function () {
  browserSync.reload();
});

gulp.task('style', function () {
    return gulp.src(srcComponents + 'template_styles.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
            }
        }))
        .pipe(
            sass({
                includePaths: [srcComponents],
                outputStyle: 'compressed'
            }).on('error', function (err) {
                console.log(err.message);
            })
        )
        .pipe(prefix(['last 15 versions','> 1%','ie 8','ie 7','iOS >= 9','Safari >= 9','Android >= 4.4','Opera >= 30'], {
            cascade: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(distFolder));
});

gulp.task('js', function(){
    return gulp.src([srcComponents + 'main.js', srcComponents + 'libs.js'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
            }})
        )
        .pipe(webpackStream({
            entry: {
                libs:  path.resolve(__dirname, './app/components/libs.js'),
                main:  path.resolve(__dirname, './app/components/main.js')
            },
            output: {
                filename: '[name].js'
            },
            mode: 'development',
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.(js)$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['env']
                        }
                    }
                ]
            },
            optimization: {
                minimize: false,
                splitChunks: {
                    chunks: 'all',
                    minSize: 1024
                }
            },
            externals: {
                jquery: 'jQuery'
            },
            performance: {
                hints: false,
                maxEntrypointSize: 512000,
                maxAssetSize: 512000
            }
        }))
        .pipe(gulp.dest(distFolder + 'js/'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(distFolder + 'js/'));
});

gulp.task('sprite-svg', function () {
    return gulp.src(srcAssets + 'images/icons-svg/*.svg')
        // minify svg
        .pipe(
            svgmin({
                js2svg: {
                pretty: true
            }
        }))
        // remove all fill and style declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('title').remove();
               // $('[fill]').removeAttr('fill');
                //$('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        // cheerio plugin create unnecessary string '&gt;', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../assets/images/required/sprite.svg',
                    render: {
                        scss: {
                            dest:'../components/sprite-svg.scss',
                            template: srcFolder + 'sprite-templates/svg_sprite-template.handlebars'
                        }
                    },
                    example: false
                }
            }
        }))
        .pipe(gulp.dest(srcFolder))
        .pipe(gulp.dest(distFolder));
});

gulp.task('images', function () {
    return gulp.src([srcAssets + 'images/**/*', '!' + srcAssets + 'images/required/sprite.svg'])
        .pipe(cache(imagemin({
            progressive: true,
            interlaced: true,
            // don't remove IDs from SVGs, they are often used
            // as hooks for embedding and styling
            svgoPlugins: [{cleanupIDs: false}]
        })))
        .pipe(gulp.dest(distFolder + 'assets/images'))
        .pipe(reload({stream: true}));
});

gulp.task('fonts', () => {
    return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
        .concat(srcAssets + 'fonts/**/*'))
        .pipe(gulp.dest(distFolder + 'assets/fonts'))
        .pipe(reload({stream: true}));
});

// inject bower components
gulp.task('wiredep', () => {
	gulp.src(srcComponents + '**/*.scss')
	.pipe(wiredep({
		ignorePath: /^(\.\.\/)+/
	}))
	.pipe(gulp.dest(srcComponents + 'scss'));

	gulp.src(srcFolder + '*.html')
	.pipe(wiredep({
		ignorePath: /^(\.\.\/)*\.\./
	}))
	.pipe(gulp.dest(srcFolder));
});

gulp.task('browser-sync', ['style', 'twig', 'js', 'sprite-svg', 'images', 'fonts'], function () {
  browserSync({
    server: {
      baseDir: distFolder
    },
    notify: false
  });
});

gulp.task('watch', function () {
    gulp.watch(srcComponents + 'main.js', ['js',  browserSync.reload]);
    gulp.watch(srcComponents + '**/*.js', ['js',  browserSync.reload]);

    gulp.watch(srcComponents + '**/*.scss', ['style', browserSync.reload]);

    gulp.watch([
		srcComponents + '**/*.js',
		srcAssets + 'images/required/*',
		srcAssets + 'images/example/*'
	]).on('change', reload);

    gulp.watch(
		[srcComponents + '**/{,*/}*.scss', '!' + srcComponents + 'components/sprite-svg.scss', '!' + srcComponents + 'libs/bootstrap/**/*.scss'], ['style', browserSync.reload],
		{debounceDelay: 200},
		function (ev) {
			if (ev.type === 'added' || ev.type === 'changed') {
			gulp.src(ev.path)
				.pipe(sassLint({
				configFile: srcFolder + 'config/sass-lint.yml'
				}))
				.pipe(sassLint.format());
			}
		}
    )

    gulp.watch([srcFolder + 'page/*.twig','app/json-data/*.json'], {cwd:'./'}, ['rebuild']);
    gulp.watch([srcComponents + '**/*.twig'], {cwd:'./'}, ['rebuild']);

    gulp.watch(srcFolder+'assets/images/icons-svg/*.svg', ['sprite-svg', browserSync.reload]);

    gulp.watch(srcAssets + 'images/required/*', ['images', browserSync.reload]);
	gulp.watch(srcAssets + 'images/example/*', ['images', browserSync.reload]);

    gulp.watch([srcComponents + '**/{,*/}*.scss', '!' + srcFolder + 'components/sprite-svg.scss'], ['style', browserSync.reload]);
});

gulp.task('build', ['style', 'twig', 'js', 'sprite-svg', 'images', 'fonts']);

gulp.task('default', ['browser-sync', 'watch']);

gulp.task('mqpack', () => {
	return gulp.src([distFolder + '*.css', '!' + distFolder + '*.min.css'])
	.pipe(gcmq()) // оптимизируем
	.pipe(gulp.dest(distFolder)) // кидаем в папку
	.pipe(cssmin()) // минифицируем
	.pipe(rename({suffix: '.min'})) // переименовываем
	.pipe(gulp.dest(distFolder)); // кидаем в папку
});

gulp.task('create-task', function() {
    fs.readdir(srcComponents, (err, files) => {
        files.forEach(file => {
            if (fs.statSync(srcComponents + file).isDirectory()) {
                tasks.push(file);
            }
        });
    });
});

gulp.task('removeContentFile', function() {
    var mainContents = fs.readFileSync(main,'utf8');
    var bowerContents = fs.readFileSync(bowerFile,'utf8');
    var libsContents = fs.readFileSync(libs,'utf8');
    var str = [];
    let toRemove = '';

    // удаление записей о компонентах из файла main.js
    let removeString = (data, strToRemove, fileName) => {
        toRemove = data;
        for (var i = 0; i < strToRemove.length; i++) {
            toRemove = toRemove.replace(strToRemove[i]+'\n','');
        }

        fs.writeFile(fileName, toRemove, (error) => { /* handle error */ })
    };

    // удаление записей о плагинах из файлов bower.js и libs.js
    for (let i = 0; i < notResult.length; i++) {
        var selectedTask = notResult[i];
        str.push(`import './${selectedTask}/${selectedTask}';`);

        del(srcComponents + selectedTask + '/**', {force:true});

        if (selectedTask == 'popup') {
            removeString(bowerContents, '    "magnific-popup": "^1.1.0",', bower);
            removeString(libsContents, "import '../../bower_components/magnific-popup/dist/jquery.magnific-popup.js';", libs);
        }
    }

    removeString(mainContents, str, main);
});

gulp.task('bowerInstall', function(cb) {
    bowerTask('install', cb);
});

gulp.task('select-task', function() {
    var diff = function (a1, a2) {
        return a1.filter(i=>!a2.includes(i))
        .concat(a2.filter(i=>!a1.includes(i)))
    }

    return gulp.src('./gulpfile.js')
        .pipe(prompt.prompt({
            type: 'checkbox',
            name: 'task',
            message: 'Выберите компоненты для установки',
            choices: tasks
        }, function(result) {

        notResult = diff(result.task, tasks);

        util.log('Запущена задача: ' + util.colors.green('Удаление ненужных компонентов'));
        gulp.start('removeContentFile');
        util.log('Завершена задача: ' + util.colors.green('Удаление ненужных компонентов'));
        //gulp.start('bowerInstall');
    }));
});

gulp.task('init', ['create-task', 'select-task']);

gulp.task('add', (cb) => {
    let isComponent = (args.component === undefined) ? false : true;
    let isPage = (args.page === undefined) ? false : true;

    // Добавление компонента
    if (isComponent) {
        let component = args.component || 'new';
        let isCss = (args.css === undefined) ? false : true;
        let isJs = (args.js === undefined) ? false : true;
        let isTwig = (args.twig === undefined) ? false : true;
        let pathFile = './app/components/';
        let cssStructure = `.${component} {\n\t\n}`;
        let jsClass = component.charAt(0).toUpperCase() + component.substr(1);
        let jsStructure = `class ${jsClass} {\n\n\t constructor() {\n\t\t this.initialize();\n\t}\n\n\t initialize() {\n\t\t\n\t}\n}\n\n new ${jsClass}();`;
        let twigStructure = `{% macro ${component}(data) %}\n\t\n{% endmacro %}`;

        fs.access(`${pathFile}${component}/`, (err) => {
            if (err) {
                fs.mkdirSync(`${pathFile}${component}`);

                if (((!isCss) && (!isJs) && (!isTwig)) || ((isCss) && (isJs) && (isTwig))) {
                    fs.appendFileSync(`${pathFile}${component}/${component}.scss`, cssStructure, 'utf8');
                    fs.appendFileSync(`${pathFile}${component}/${component}.js`, jsStructure, 'utf8');
                    fs.appendFileSync(`${pathFile}${component}/${component}.twig`, twigStructure, 'utf8');
                } else {
                    if (isCss) {
                        fs.appendFileSync(`${pathFile}${component}/${component}.scss`, cssStructure, 'utf8');
                    }

                    if (isJs) {
                        fs.appendFileSync(`${pathFile}${component}/${component}.js`, jsStructure, 'utf8');
                    }

                    if (isTwig) {
                        fs.appendFileSync(`${pathFile}${component}/${component}.twig`, twigStructure, 'utf8');
                    }
                }

                console.log(`\t   Создана папка ${pathFile}${component}/`);
            } else {
                console.log('\t   Папка существует, Вы можете отдельно добавить необходимые файлы командами --css --js --twig');

                if (((!isCss) && (!isJs) && (!isTwig)) || ((isCss) && (isJs) && (isTwig))) {
                    checkFile(pathFile, component, '.scss');
                    checkFile(pathFile, component, '.js');
                    checkFile(pathFile, component, '.twig');
                } else {
                    if (isCss) {
                        checkFile(pathFile, component, '.scss', cssStructure);
                    }

                    if (isJs) {
                        checkFile(pathFile, component, '.js', jsStructure);
                    }

                    if (isTwig) {
                        checkFile(pathFile, component, '.twig', twigStructure);
                    }
                }
            };
        });
    }

    // Добавление страницы
    if (isPage) {
        let page = args.page || 'newPage';
        let fromPage = args.from || 'index';
        let pathFile = './app/page/';
        let pathFileJson = './app/json-data/';
        let twigStructure = ``;
        let jsonStructure = ``;

        // Вырезаем контентную часть из файла и создаем пустой файл с подключаемыми компонентами
        fs.access(`${pathFile}${page}.twig`, (err) => {
            if (err) {

                twigStructure = fs.readFileSync(`${pathFile}${fromPage}.twig`,'utf8');
                jsonStructure = fs.readFileSync(`${pathFileJson}${fromPage}.json`,'utf8');

                let twigStructureSub = twigStructure.split('{% block content %}');

                twigStructureSub = twigStructureSub[0] + '{% block content %}\n\n\t<div class="container">\n\n\t</div>\n\n{% endblock %}';

                fs.appendFileSync(`${pathFile}${page}.twig`, twigStructureSub, 'utf8');
                fs.appendFileSync(`${pathFileJson}${page}.json`, jsonStructure, 'utf8');
            } else {
                console.log(`\t   Файл ${page}.twig существует`);
            }
        });
    }

    cb();
});

// Проверка на существование файлов в компоненте
function checkFile(pathFile, component, typeFile, structureFile) {
    fs.access(`${pathFile}${component}/${component}${typeFile}`, (err) => {
        if (err) {
            fs.appendFileSync(`${pathFile}${component}/${component}${typeFile}`, structureFile, 'utf8');
            console.log(`\t   Добавлен файл ${pathFile}${component}/${component}${typeFile}`);

        } else {
            console.log(`\t   Файл ${component}${typeFile} существует`);
        }
    });
}

function getDateTime() {
	var now     = new Date();
	var year    = now.getFullYear();
	var month   = now.getMonth() + 1;
	var day     = now.getDate();
	var hour    = now.getHours();
	var minute  = now.getMinutes();
	var second  = now.getSeconds();
	if(month.toString().length == 1) {
		var month = '0' + month;
	}
	if(day.toString().length == 1) {
		var day = '0' + day;
	}
	if(hour.toString().length == 1) {
		var hour = '0' + hour;
	}
	if(minute.toString().length == 1) {
		var minute = '0' + minute;
	}
	if(second.toString().length == 1) {
		var second = '0'+second;
	}
	var dateTime = year + month + day + hour + minute + second;
	return dateTime;
}

var getJsonAsync = function (p, cb) {
  fs.stat(p, function (err) {
	  if (err) {
		  cb(undefined, {});
	  } else {
		  fs.readFile(p, 'utf8', function (errRead, data) {
			  if (errRead) {
				  cb(undefined, {});
			  } else {
				  var jsData = JSON.parse(data);
				  cb(undefined, jsData);
			  }
		  })
	  }
  })
};
