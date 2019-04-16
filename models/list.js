const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema(
    {
        name: {type: String, required: true},
        dateCreated: {type: Date, required: true},
        totalCost: {type: Number, require: true},
        categories: [{type: Schema.Types.ObjectId, ref:'Category'}],
        listItems: [{type: Schema.Types.ObjectId, ref: 'item'}]
    }
);

module.exports = mongoose.model('List', ListSchema);