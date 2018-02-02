const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ReportSchema = new Schema({
    
    usernameReported: {
        type: String,
        required: true
    },
    userIdReported: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    usernameHasMadeComplaint: {
        type: String,
        required: true
    },
    userIdHasMadeComplaint: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    reasonForReport: String,
    dateOfCompaint: Date


   

});

const Report = mongoose.model('report', ReportSchema);

module.exports = Report;