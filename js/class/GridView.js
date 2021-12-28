'use strict'
class GridView {

    /**
    * properties
    * @param [array] data - входные данные
    * @param [string] _header - заголовок таблицы
    * @param [array] _headerCSS - CSS стили заголовка
    * @param [array] _tableCSS - CSS стили таблицы
    * @param [string] element - html документ для вставки таблицы
    * @param [array] attribute - данные для формирования столбцов
    */

    constructor() {
        this.data = [];
        this._header = '';
        this._headerCSS = [];
        this._tableCSS = [];
        this._element = 'body';
        this.attribute = [];
    }

    /**
    * Method set _header
    */

    setHeader(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim();
            return true
        }
        return false
    }

    /**
    * Method set _headerCSS
    */

    setHeaderCSS(headerCSS) {
        if (typeof headerCSS === 'object') {
            this._headerCSS = headerCSS;
            return true
        }
        return false
    }

    /**
    * Method set _tableCSS
    */

    setTableCSS(tableCSS) {
        if (typeof tableCSS === 'object') {
            this._tableCSS = tableCSS;
            return true
        }
        return false
    }

    /**
    * Method set _element
    */

    setElement(element) {
        if (element !== undefined) {
            this._element = element;
            return true
        } else {
            this._element = document.querySelector('body');
            return false
        }

    }

    /**
    * Method render - draw table 
    */

    render(data) {

        // rewrite properties dafault
        this.data = data.data;
        this.setHeader(data.header);
        this.setHeaderCSS(data.headerCSS);
        this.setTableCSS(data.tableCSS);
        this.setElement(data.element);
        this.attribute = data.attribute;


        // show header
        if (this._header) {
            let header = document.createElement('h1');
            this._headerCSS.forEach(classCSS => {
                header.classList.add(classCSS)
            });
            header.textContent = this._header;
            this._element.append(header);
        }

        // show table
        let table = document.createElement('table');
        this._tableCSS.forEach(classCSS => {
            table.classList.add(classCSS)
        });

        // show table header 
        let trHeader = document.createElement('tr');
        for (let key in this.attribute) {
            let th = document.createElement('th');

            if (this.attribute[key].label === undefined) {
                th.textContent = key;
            } else {
                th.textContent = this.attribute[key].label;
            }
            trHeader.append(th);
        }
        table.append(trHeader);

        // show table rows
        for (let i = 0; i < this.data.length; i++) {
            let trRows = document.createElement('tr');
            let dataArr = this.data[i]; // одна строка данных

            // fill table cell
            for (let key in this.attribute) {
                let td = document.createElement('td');
                let value = dataArr[key]; // значение ячейки
                if (value.indexOf('</') !== -1) {
                    td.innerHTML = value;
                } else {
                    td.textContent = value;
                }
                trRows.append(td);
            }
            table.append(trRows);
        }
        this._element.append(table);
    }
}