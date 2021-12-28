'use strict'

// содержимое будущей таблицы
const data = [
    {
        vendorCode: '21000',
        name: 'Дрель ударная',
        price: '7 890 ₽',
        stock: '5',
        sales: '43',
        reviews: '22',
    },
    {
        vendorCode: '21001',
        name: 'Шуруповерт аккумуляторный',
        price: '4 600 ₽',
        stock: '34',
        sales: '21',
        reviews: '7',
    },
    {
        vendorCode: '21002',
        name: 'Перфоратор',
        price: '8 400 ₽',
        stock: '12',
        sales: '7',
        reviews: '1',
    },
    {
        vendorCode: '21003',
        name: 'Пылесос строительный',
        price: '12 000 ₽',
        stock: '6',
        sales: '32',
        reviews: '6',
    },
    {
        vendorCode: '21004',
        name: 'Газонокосилка',
        price: '24 000 ₽',
        stock: '24',
        sales: '15',
        reviews: '18',
    },
    {
        vendorCode: '21005',
        name: 'Шлифмашина угловая',
        price: '3 700 ₽',
        stock: '11',
        sales: '45',
        reviews: '54',
    },
    {
        vendorCode: '21006',
        name: 'Циркулярная пила',
        price: '5 600 ₽',
        stock: '7',
        sales: '23',
        reviews: '21',
    },
    {
        vendorCode: '21007',
        name: 'Триммер садовый',
        price: '14 000 ₽',
        stock: '15',
        sales: '11',
        reviews: '4',
    },
];

// передаваемые параметры для отрисовки таблицы
const parameters1 = {

    data: data,
    header: `Таблица построена с помощью класса GridView без сортировки столбцов`,
    headerCSS: ['table__header'],
    tableCSS: [],
    element: document.querySelector('div'),

    attribute: {
        'vendorCode': {
            'label': 'Артикул',
        },
        'name': {
            'label': 'Наименование',
        },
        'price': {
            'label': 'Цена',
        },
        'stock': {
            'label': 'Остаток',
        },
        'sales': {
            'label': 'Продажи',
        },
        'reviews': {
            'label': 'Отзывы',
        },
    },

}
const parameters2 = {

    data: data,
    header: `Таблица построена с помощью класса GridViewSort c сортировкой столбцов`,
    headerCSS: ['table__header'],
    tableCSS: [],
    element: document.querySelector('div'),

    attribute: {
        'vendorCode': {
            'label': 'Артикул',
        },
        'name': {
            'label': 'Наименование',
        },
        'price': {
            'label': 'Цена',
        },
        'stock': {
            'label': 'Остаток',
        },
        'sales': {
            'label': 'Продажи',
        },
        'reviews': {
            'label': 'Отзывы',
        },
    },

}

let countTable = 0;
let tableOne = new GridView();
tableDraw(tableOne, parameters1);


let tableTwo = new GridViewSort();
tableDraw(tableTwo, parameters2);
tableSort(tableTwo, parameters2)

