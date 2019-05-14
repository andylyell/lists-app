const List = require('../models/list');
const Item = require('../models/item');
const Category = require('../models/category');

//------- GET A LIST OF LISTS -------//
exports.getLists = (req, res, next) => {


    List.find({})
    .populate('categories')
    .populate({
        path: "listItems",
        model: "Item",
        populate: {
            path: 'category',
            model: 'Category'
        }
    })
    .exec((err, getLists) => {
        if(err){
            console.log('could not get all lists');
            next(err);
        } else{
            if(getLists.length === 0){
                res.send(`No lists found - create one to get started`);
            } else {
                res.json(getLists);
            }
        }
    })

    //---- ALTERNATIVE WAY WITH PROMISE BASED HANDLING ----//
    // List.find()
    // .then(data => res.json(data))
    // .catch(next)

    //---- OLD ALTERNATIVE ----//
    // List.find({}, (err, lists) => {
    //     if(err){
    //         console.log('something went wrong getting a list of lists for you');
    //         next(err);
    //     }
    //     else {
    //         res.json(lists);
    //     }
    // });
}

//------- GET A SINGLE LIST -------//
exports.getList = (req, res, next) => {

    // List.findById(req.params.id, (err, list) => {
    //     if(err){
    //         console.log('Could not find the list you were looking for');
    //         next(err);
    //     }
    //     else {
    //         res.json(list);
    //     }
    // })

    List.findById(req.params.id)
    .populate('categories')
    .populate({
        path: "listItems",
        model: "Item",
        populate: {
            path: 'category',
            model: 'Category'
        }
    })
    .exec((err, getLists) => {
        if(err){
            console.log('could not get all lists');
            next(err);
        } else{
            res.json(getLists);
        }
    })
}

//------- CREATE A LIST -------//
exports.createList = (req, res, next) => {

    let listObject = Object.assign({}, req.body); //create a new copy of the object
    const currentDate = Date.now(); // create a new date
    listObject.dateCreated = currentDate; // assign date to the dateCreated key of the new object

    // List.create(listObject) // add new object to the database
    // .then(data => res.json(data))
    // .catch(next);

    List.create(listObject, (err, listCreated) => {
        if(err){
            console.log('could not create list, try again');
            next(err);
        } else {
            res.json(listCreated);
        }
    })
}

//------- UPDATE A LIST -------//
exports.updateList = (req, res) => {

    const query = req.params.id;
    const update = req.body;
    const options = {new: true};
    
    List.findByIdAndUpdate(query, update, options)
    .populate('categories')
    .populate({
        path: "listItems",
        model: "Item",
        populate: {
            path: 'category',
            model: 'Category'
        }
    })
    .exec((err, listUpdated) => {
        if(err){
            console.log('could not update list');
            next(err);
        } else{
            res.json(listUpdated);
        }
    })
}

//------- DELETE A LIST -------//
exports.deleteList = (req, res, next) => {

    // Need to delete everything inside it as well.
    List.findById(req.params.id)
    .then(data => { 
        if(data.categories.length !== 0){
            data.categories.forEach((category) => {
                Category.findByIdAndDelete(category, (err, categoryDelete) => {
                    if(err){
                        console.log('could not delete the category in the list');
                        next(err);
                    }
                    else {
                        console.log(`${categoryDelete}`)
                    }
                })
                
            })
        }
        if(data.listItems.length !== 0){
            data.listItems.forEach((item) => {
                Item.findByIdAndDelete(item, (err, itemDelete) => {
                    if(err){
                        console.log('could not delete the item in the list');
                        next(err);
                    }
                    else {
                        console.log(`${itemDelete}`)
                    }
                })
            })
        }
        return data;
    })
    .then(listData => {
        List.findByIdAndDelete(listData, (err, listInfoData) => {
            if(err){
                console.log('could not delete the list');
                next(err);
            }
            else {
                res.send(`List: ${listInfoData.id} deleted`);
            }
        })
    })
    .catch(next);

    // List.findById(req.params.id)
    // .then(data => {
    //     console.log(data.categories);
    //     console.log(data.listItems);
    //     res.json(data);
    // })
    // .catch(next)

    // console.log(categoriesToDelete);
    
    // List.findByIdAndDelete(req.params.id, (err, listDelete) => {
    //     if(err) {
    //         console.log('could not delete the list');
    //         next(err);
    //     } else {
    //         if(listDelete === null){
    //             res.send('List has already been delete');
    //         } 
    //         else {
    //             res.json(listDelete);
    //         }
            
    //     }
    // })

}

//////REFERENCE
// exports.deleteItem = (req, res, next) => {
    
//     Item.findByIdAndDelete(req.params.id, (err, itemDelete) => {
//         if(err){
//             console.log('Could not delete the item');
//             next(err);
//         } else {
//             res.json(itemDelete)
//         }
//     })

// }