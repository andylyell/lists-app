const Item = require('../models/item');

exports.getItems = (req, res, next) => {
    
    Item.find({}, (err, items) => {
        if(err){
            console.log('Something went wrong getting list of items');
            next(err);
        }
        else {
            res.json(items);
        }
    })

}

exports.getItem = (req, res, next) => {
    
    // Item.findById(req.params.id, (err, item) => {
    //     if(err){
    //         console.log('could not find item');
    //         next(err);
    //     }
    //     else {
    //         res.json(item);
    //     }
    // })

    Item.findById(req.params.id)
    .populate('category')
    .exec((err, item) => {
        if(err){
            console.log('could not find item');
            next(err);
        } else{
            res.json(item);
        }
    })

}

exports.createItem = (req, res, next) => {
    
    Item.create(req.body, (err, itemCreated) => {
        if(err){
            console.log('error creating item');
            next(err);
        }
        else{
            res.json(itemCreated);
        }
    })

}

exports.updateItem = (req, res, next) => {

    const query = req.params.id;
    const update = req.body;
    console.log(update);
    const options = {new: true};

    // Item.findByIdAndUpdate(query, update, options, (err, itemUpdated) => {
    //     if(err){
    //         console.log('error updating item');
    //         next(err);
    //     }
    //     else{
    //         res.json(itemUpdated);
    //     }
    // })

    Item.findByIdAndUpdate(query, update, options)
    .populate('category')
    .exec((err, itemCreated) => {
        if(err){
            console.log('could not update item');
            next(err);
        } else{
            res.json(itemCreated);
        }
    })
}

exports.deleteItem = (req, res, next) => {
    
    Item.findByIdAndDelete(req.params.id, (err, itemDelete) => {
        if(err){
            console.log('Could not delete the item');
            next(err);
        } else {
            res.json(itemDelete)
        }
    })

}