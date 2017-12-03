const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const NotificationSchema = new Schema({
    username: String,
    text: String,
    URL: String,
    fave: Boolean,
    
    
});

const Notification = mongoose.model('notification', NotificationSchema);