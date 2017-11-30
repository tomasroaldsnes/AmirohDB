const mongoose = require('mongoose');
const CommentSchema = require('./comments');
const NotificationSchema = require('./notification');

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
    hasBeenLikedBy: [String],
    productsUsed: [String],
    points: Number,
    tags: [String],
    comments: [CommentSchema],
    notifications: [NotificationSchema]

});

const Inspo = mongoose.model('inspo', InspoSchema);

module.exports = Inspo;