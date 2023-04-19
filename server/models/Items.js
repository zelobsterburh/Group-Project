const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type:String,
    },
    img: {
        type: String,
    },

});
module.exports = Item = mongoose.model('item', ItemSchema);