const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true
        },
        post : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Post',
            required : true
        },
        description : {
            type : String,
            required : true
        },
        createdAt : {
            type : Date,
            default : Date.now
        }
        },
        { timestamps : true }
        );

        module.exports = mongoose.model('Comment', CommentSchema);
        