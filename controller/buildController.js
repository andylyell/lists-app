const List = require('../models/list');
const Item = require('../models/item');
const Category = require('../models/category');
const { newCategoryArray, newItemArray, newListArray } = require('../models/dbseed');
const mongoose = require('mongoose');
const db = mongoose.connection;

exports.buildSeed = (req, res, next) => {
    const createNewCategories = () => {
            return Promise.all(newCategoryArray.map(category => {
                return Category.create(category)
                    .then((data) => {
                        // console.log(`CATEGORY: [${data.name}] has been created`)
                        return data;
                    })
            }))
    };

    const createNewItems = (categoriesArray) => {
        
        const categoryIds = getIds(categoriesArray);

        return Promise.all(newItemArray.map(item => {
            item.category = categoryIds[Math.floor(Math.random() * Math.floor(4))];
            return Item.create(item)
            .then((data) => {
                // console.log(`ITEM: [${data.name}] has been created`)
                return data;
            })
        }))
    }

    const createNewLists = (categoriesArray, itemsArray) => {

       return Promise.all(newListArray.map(list => {

            // const categoryIds = getIds(categoriesArray);
            // const newCategoryArray = createObjectArray(categoryIds);
            // const itemIds = getIds(itemsArray);
            // const newItemArray = createObjectArray(itemIds);
            // console.log(newCategoryArray);
            // console.log(newItemArray);
            list.categories = createObjectArray(categoriesArray);
            list.listItems = createObjectArray(itemsArray);

            return List.create(list)
            .then((data) => {
                // console.log(`LIST: [${data.name}] has been created`)
                    return data;
            })
        }))
    }  

    async function getCategoryIds() {
        try{
            const categories = await createNewCategories();
            // const categoriesIds = await Object.values(categories);
            // console.log(`CATEGORIES: ${categoriesIds}`);
            const items = await createNewItems(categories);
            // console.log(`ITEMS: ${items}`);
            const lists = await createNewLists(items, categories);
            // console.log(`LISTS: ${lists}`);
            res.json(lists);
        }
        catch(err){
            console.log(err);
        }
    }
    getCategoryIds();
    // res.send(`Seeded database`);
}

exports.destroyCollections = (req, res, next) => {
    const collectionsToDelete = req.body;
    collectionsToDelete.forEach(collection => {
        db.dropCollection(collection)
        .then(_=> console.log(`${collection} collection has been deleted`))
        .catch(next)
    })
    res.send(`all collections deleted`);
}

//---- HELPER FUNCTION FOR IDs ----//
const getIds = (array) => {
    return array.map(arrayItem => {
        return arrayItem.id;
    })
}

const createObjectArray = (array) => {
    return array.map(arrayItem => {
        const newObj = { _id: arrayItem.id }
        const nextObj = Object.create(newObj);
        // console.log(`[ARRAY ITEM] ${arrayItem}`);
        return nextObj;
    })
}