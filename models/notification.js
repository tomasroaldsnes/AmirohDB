const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const NotificationSchema = new Schema({
    username: String,
    text: String,
    URL: String,
    point: Boolean,
    fave: Boolean,
    comment: Boolean
    
});

const Notification = mongoose.model('notification', NotificationSchema);