const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema= new Schema({
    token:{
        type:String,
        require:true
    }, 
     createdAt: {
        type: Date,
        default: Date.now,
      },
})

const token = mongoose.model('token',tokenSchema);
module.exports = token;