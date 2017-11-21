const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Username must be longer than 2 charackters'
        },
        required: [true, 'Username is required.'],
        unique: true
    },
    password: {
    
        type: String,
        required: true
            
    },
    name: String,
    profileDescription: String,
    profilePicture: String,
    email: {
        type: String,
        required: true
    },
    inspos: [{
        type: Schema.Types.ObjectId,
        ref: 'inspo'
    }],
    salt: String
    



});




const User = mongoose.model('user', UserSchema);
module.exports = User;