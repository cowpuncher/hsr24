if ($(".complect").length) {

    const getTotalCostTemplate = (newCost, oldCost) => {
        return `
            ${oldCost !== newCost ? `<div class="old-cost">${oldCost} <span class="elem-rub">i</span></div>` : ``}
            <div class="new-cost">${newCost} <span class="elem-rub">i</span></div>
            ${oldCost !== newCost ? `<div class="profit">Ваша выгода:<br> ${oldCost - newCost} <span class="elem-rub">i</span></div>` : ``}
            
        `
    };

    const renderTotal = () => {
        const checkedItems = $(".complect__item").filter((i, item) => {
            return $(item).find("input:checked").length
        });
        const newCosts = checkedItems.map((i, item) => {
            return $(item).data("new-cost");
        });
        const newCost = Array.from(newCosts).reduce((acc, cur) => cur + acc, 0);
        const oldCosts = checkedItems.map((i, item) => {
            return $(item).data("old-cost") || newCosts[i];
        });
        const oldCost = Array.from(oldCosts).reduce((acc, cur) => cur + acc, 0);
        if (checkedItems.length) {
            $(".complect__total").show();
        } else {
            $(".complect__total").hide();
        }
        $(".complect__total-prices").html(getTotalCostTemplate(newCost, oldCost))
    };

    renderTotal();

    $(".complect").on("change", renderTotal);
}
