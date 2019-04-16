const List = require('../models/list');

//------- GET A LIST OF LISTS -------//
exports.getLists = (req, res, next) => {

    List.find({}, (err, lists) => {
        if(err){
            console.log('something went wrong getting a list of lists for you');
            next(err);
        }
        else {
            res.json(lists);
        }
    });

    //---- ALTERNATIVE WAY WITH PROMISE BASED HANDLING ----//
    // List.find()
    // .then(data => res.json(data))
    // .catch(next)
}

//------- GET A SINGLE LIST -------//
exports.getList = (req, res, next) => {

    List.findById(req.params.id, (err, list) => {
        if(err){
            console.log('Could not find the list you were looking for');
            next(err);
        }
        else {
            res.json(list);
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
    res.send('NOT IMPLEMENTED: update a list');
}

//------- DELETE A LIST -------//
exports.deleteList = (req, res, next) => {
    
    List.findByIdAndDelete(req.params.id, (err, listDelete) => {
        if(err) {
            console.log('could not delete the list');
            next(err);
        } else {
            if(listDelete === null){
                res.send('List has already been delete');
            } 
            else {
                res.json(listDelete);
            }
            
        }
    })

}