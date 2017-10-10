const mongoose = require('mongoose');

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
    claps: Number,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]

});

const Inspo = mongoose.model('inspo', InspoSchema);

module.exports = Inspo;