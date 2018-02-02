const Reports = require('../models/reports');


module.exports = {
    
    getReports(req, res, next) {
        Reports.find({})
        .then(report => res.send(report))
        .catch(next); 
    },
    createReport(req, res, next) {
        const reportProps = req.body;
        
        Reports.create(reportProps)
        .then(report => res.send(report))
        .catch(next);  
    }

};