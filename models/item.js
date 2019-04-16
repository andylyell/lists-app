const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {
        name: {type: String, required: true},
        amount: {type: Number},
        price: {type: Number},
        notes: {type: String},
        category: {type: Schema.Types.ObjectId, ref:'Category'}
    }
);

module.exports = mongoose.model('Item', ItemSchema);