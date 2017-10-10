const User = require('../models/user');

function userPopulate(userId, done){
    User.findById(userId).populate('inspos')
        .then(() => done());
}

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there' });
    },
    users(req, res, next) {
        User.find({})
        .then(users => res.send(users))
        .catch(next); 
    },
    userId(req, res, next) {
        const userId = req.params.id;

        User.findById(userId)
        .then(user => res.send(user))
        .catch(next); 
    },
    userUsername(req, res, next) {
        const userName = req.params.username;

        User.find({ username: userName })
        .then(user => res.send(user))
        .catch(next); 
    },

     create(req, res, next) {
        const userProps = req.body;
        
        User.create(userProps)
        .then(user => res.send(user))
        .catch(next);  
    },


   

    edit(req, res, next) {
        const userId = req.params.id;
        const userProps = req.body;
        
        User.findByIdAndUpdate({ _id: userId }, userProps)
        .then(() => User.findById({ _id: userId }))
        .then(user => res.send(user)) 
        .catch(next);
        
    },

     delete(req, res, next) {
        const userId = req.params.id;
        
        
        User.findByIdAndRemove(userId)
        .then(user => res.status(204).send(user)) 
        .catch(next);
        
    }  

};