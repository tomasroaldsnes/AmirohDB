const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const MirrorOrderSchema = new Schema({
    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: String,
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    phoneNumber: String,
    walletAddress: {
        type: String,
        required: true
    },
    dateOfOrder: Date


   

});

const MirrorOrder = mongoose.model('mirrororder', MirrorOrderSchema);

module.exports = MirrorOrder;