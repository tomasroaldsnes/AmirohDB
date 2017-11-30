const User = require('../models/user');
const Inspo = require('../models/inspo');

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
    addToCollection(req, res, next) {
        const userId = req.params.id;
        const inspoProps = req.body;
        
        User.findById({ _id: userId })
        .then((user) => { 
            user.collections.push(inspoProps);
            return user.save();
        })
        .then(() => User.findById({ _id: userId }))
        .then(user => {
            user.populate('collections');
            res.send(user);
        }) 
        .catch(next);
        
    },
    getCollection(req, res, next) {
        const userId = req.params.id;

        User.findById({ _id: userId })
        .then((user) => { 
            Inspo.find({_id: user.collections})
            .then((inspo) => {
                res.send(inspo);
            })
            
        })
        .catch(next);


    },
    addFavedUser(req, res, next) {
        const userId = req.params.id;
        const favedProps = req.body;
        
        User.findById({ _id: userId })
        .then((user) => { 
            user.favedUsers.push(favedProps);
            return user.save();
        })
        .then(() => User.findById({ _id: userId }))
        .then(user => {
            user.populate('favedUsers');
            res.send(user);
        }) 
        .catch(next);
        
    },
    getFavedUsers(req, res, next) {
        const userId = req.params.id;

        User.findById({ _id: userId })
        .then((user) => { 
            User.find({_id: user.favedUsers})
            .then((user) => {
                res.send(user);
            })
            
        })
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
    editUsername(req, res, next) {
        const userId = req.params.username;
        const userProps = req.body;
        
        User.findOneAndUpdate({ username: userId }, userProps)
        .then(() => User.findOne({ username: userId }))
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