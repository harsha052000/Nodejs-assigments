const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create inventory schema and model
const InventorySchema = new Schema({
    name: {
        type: String,
        required : [true , 'name field is required ']
    },
    rank: {
        type: String,
        
    },
    available: {
        type: Boolean,
        default: false
    }
});
const Inventory = mongoose.model('inventory',InventorySchema)
module.exports=Inventory;

