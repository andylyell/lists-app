const newListArray = [
    {
        name: "shopping list",
        dateCreated: Date.now(),
        totalCost: 0,
        categories: [],
        listItems: []
    },
    {
        name: "Fishing trip",
        dateCreated: Date.now(),
        totalCost: 0,
        categories: [],
        listItems: []
    },
    {
        name: "To do - week 12th May",
        dateCreated: Date.now(),
        totalCost: 0,
        categories: [],
        listItems: []
    }
];

const newCategoryArray = [
    {
        name: "fruits"
    },
    {
        name: "vegetables"
    },
    {
        name: "dairy"
    },
    {
        name: "red meats"
    },
    {
        name: "fish"
    },
]

const newItemArray = [
    {
        name: "carrots",
        isChecked: false,
        amount: 1,
        price: 0.59,
        notes: "Get a bag of bigger ones"
    },
    {
        name: "mince meat",
        isChecked: false,
        amount: 2,
        price: 2.59,
        notes: ""
    },
    {
        name: "apples",
        isChecked: false,
        amount: 1,
        price: 1.30,
        notes: "Try not to get bruised ones"
    },
    {
        name: "milk",
        isChecked: false,
        amount: 2,
        price: 1.10,
        notes: "Longer life is better, please check date"
    },
    {
        name: "paprika",
        isChecked: false,
        amount: 1,
        price: 0.80,
        notes: ""
    },
]

module.exports = { newListArray, newCategoryArray, newItemArray};