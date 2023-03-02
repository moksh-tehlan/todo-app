const mongoose = require('./db.odm.config');

const todoSchema = mongoose.Schema({
    date:{
        type:Number,
        default:Math.floor(Date.now() / 1000)
    },
    title:{
        type:String,
        required:[true,'title is required']
    }
});

const todo = mongoose.model('todo',todoSchema);

module.exports = todo;