const mongoose = require('mongoose');
const CommentSchema = require('./comments');

const Schema = mongoose.Schema;


const InspoSchema = new Schema({
    title: String,
    description: String,
    URL: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    productsUsed: [String],
    points: Number,
    tags: [String],
    comments: [CommentSchema]

});

const Inspo = mongoose.model('inspo', InspoSchema);

module.exports = Inspo;