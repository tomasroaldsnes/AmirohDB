const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const CommentSchema = new Schema({
    username: String,
    text: String,
    profilePicture: String
    
});

const Comment = mongoose.model('comment', CommentSchema);

//module.exports = Comment;