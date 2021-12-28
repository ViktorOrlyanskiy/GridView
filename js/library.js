'use strict'

function tableDraw(tableName, parameters) {
    countTable++;
    parameters.tableCSS = [`table_${countTable}`];
    tableName.render(parameters);
}

function removeClassCSS(elements, classCSS) {
    elements.forEach(elem => {
        elem.classList.remove(classCSS)
    })
}

function tableSort(tableName, parameters) {
    let labels = document.querySelectorAll(`.${tableName._tableCSS} th`);
    labels.forEach(label => {

        let routSort = '';

        label.addEventListener('click', () => {
            routSort = returnRoutSort(label);

            tableName.sortingColumn(label, tableName, parameters);

            removeClassCSS(labels, 'arrowUp');
            removeClassCSS(labels, 'arrowDown');

            if (routSort === 'up') {
                label.classList.add('arrowUp');
            } else {
                label.classList.add('arrowDown');
            }
        });
    })

    // возвращает направление сортировки
    function returnRoutSort(label) {
        if (label.classList.contains('arrowDown')) {
            return 'up'
        } else {
            return 'down'
        }
    }
};