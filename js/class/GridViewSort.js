class GridViewSort extends GridView {

    /**
    * Method sortingColumn 
    */

    sortingColumn(label, tableName, parameters) {

        // переменная для сортируемого столбца
        let sortingKey;

        // определяет столбец для сортировки
        for (let key in parameters.attribute) {
            if (parameters.attribute[key].label === label.textContent) {
                sortingKey = key;
            }
        }


        // сортирует выбранный столбец
        parameters.data.sort((a, b) => {

            if (returnNumber(a[sortingKey]) === 0) {
                return 0
            }

            if (label.classList.contains('arrowDown')) {
                if (returnNumber(a[sortingKey]) < returnNumber(b[sortingKey])) {
                    return 1
                } else {
                    return -1

                }


            } else if (label.classList.contains('arrowUp')) {

                if (returnNumber(a[sortingKey]) > returnNumber(b[sortingKey])) {
                    return 1
                } else {
                    return -1
                }

            } else {

                if (returnNumber(a[sortingKey]) > returnNumber(b[sortingKey])) {
                    return 1
                } else {
                    return -1
                }

            }
        });

        // трансформирует data в одномерный массив
        let tempArr = [];
        for (let i = 0; i < parameters.data.length; i++) {
            let dataArr = parameters.data[i];
            for (let value in dataArr) {
                tempArr.push(dataArr[value])
            }
        }

        // записывает созданный массив в ячейки
        let cells = document.querySelectorAll(`.${tableName._tableCSS} td`);
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = tempArr[i]
        }

        function returnNumber(string) {
            return Number(string.replace(/\D/g, ''))
        }
    }
}