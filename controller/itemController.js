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
    
    Item.findById(req.params.id, (err, item) => {
        if(err){
            console.log('could not find item');
            next(err);
        }
        else {
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
    res.send('NOT IMPLEMENTED: update an item');
}

exports.deleteItem = (req, res, next) => {
    
    Item.findByIdAndDelete(req.params.id, (err, itemDelete) => {
        if(err){
            console.log('Could not delete the item');
            next(err);
        } else {
            res.json(itemDelete);
        }
    })

}