const Inspo = require('../models/inspo');
const User = require('../models/user');



module.exports = {
   //posting an inspo to the feed
     create(req, res, next) {
        const inspoProps = req.body;
        
        Inspo.create(inspoProps)
        .then(inspo => res.send(inspo))       
        .catch(next);
        
    },
     
    inspos(req, res, next) {
        Inspo.find({})
        .then(inspos => res.send(inspos))
        .catch(next); 
    },
    delete(req, res, next) {
        const inspoId = req.params.id;
        
        
        Inspo.findByIdAndRemove(inspoId)
        .then(inspo => res.status(204).send(inspo)) 
        .catch(next);
        
    },
    edit(req, res, next) {
        const inspoId = req.params.id;
        const inspoProps = req.body;
        
        Inspo.findByIdAndUpdate({ _id: inspoId }, inspoProps)
        .then(() => Inspo.findById({ _id: inspoId }))
        .then(inspo => res.send(inspo)) 
        .catch(next);
        
    },
    insposUserId(req, res, next) {
        const _userId = req.params.id;

        Inspo.find({ userId: _userId})
        .then(inspos => res.send(inspos))
        .catch(next); 
    },  

    insposUsername(req, res, next) {
        const _username = req.params.username;

        Inspo.find({ username: _username})
        .then(inspos => res.send(inspos))
        .catch(next); 
    }

};

