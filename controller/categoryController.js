const Category = require('../models/category');

//------- GET A LIST OF CATEGORIES -------//
exports.getCategories = (req, res, next) => {
    
    Category.find({}, (err, categories) => {
        if(err){
            console.log('could not find categories');
            next(err);
        }
        else {
            if(categories.length === 0){
                res.send(`No categories could be found - create some to get started`);
            } 
            else {
                res.json(categories);
            } 
            
        }
    })
    
}

//------- GET A SINGLE CATEGORY -------//
exports.getCategory = (req, res, next) => {
    
    Category.findById(req.params.id, (err, category) => {
        if(err){
            console.log('could not find category you were looking for');
            next(err);
        }
        else {
            if(category === null){
                res.send('Category does not exist');
            }
            res.json(category);
        }
    })

}

//------- CREATE A CATEGORY -------//
exports.createCategory = (req, res, next) => {

    Category.create(req.body, (err, categoryCreated) => {
        if(err){
            console.log('Something has gone wrong');
            next(err);
        }
        else {
            res.json(categoryCreated);
        }
    })

}

//------- UPDATE A CATEGORY -------//
exports.updateCategory = (req, res, next) => {

    Category.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, categoryUpdate) => {
        if(err){
            console.log('error updating the category');
            next(err);
        } 
        else {
            res.json(categoryUpdate);
        }
    })

}

//------- DELETE A CATEGORY -------//
exports.deleteCategory = (req, res, next) => {
    
    Category.findByIdAndDelete(req.params.id, (err, categoryDelete) => {
        if(err){
            console.log('could not delete the category');
            next(err);
        }
        else{
            if(categoryDelete === null){
                res.send('Category has already been deleted');
            }
            else{
                res.send(`The Category '${categoryDelete.name}' has been deleted`);
            }
        }
    })

}

