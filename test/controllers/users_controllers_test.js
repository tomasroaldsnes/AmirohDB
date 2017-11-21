const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
//const Driver = require('../../models/driver');

const User = mongoose.model('user');

describe('User controllers', () => {
    it('GET to amirohapi/users returns all users', (done) => {
        User.find({}).then(users => {
        //not too sure about this test, but tested manually with post/get with postman and GET users seems to work fine ie. returns a list of users in DB
            request(app)
            .get('/AmirohAPI/users')
            .end((err, response) => {
                console.log(response.body);
                assert(response.body._id === users._id);
                done();
            });
            
        });
        
        
    });

    it('GET to amirohAPI/users/id to return user', done => {
        const user = new User({ username: 'toma', email: 't@t.com', password: "34564532567" });

        user.save().then(() => {
            request(app)
                .get(`/AmirohAPI/users/${user._id}`)
                .end((err, response) => {
                    User.findOne({ username: 'toma' })
                    .then(user => {
                        assert(user._id.toString() === response.body._id.toString());
                        done();
                    });
 
                })
        })

    }); 



    it('post to amirohapi/users creates a new user', (done) => {
        
        User.count().then(count => {
            request(app)
            .post('/AmirohAPI/users')
            .send( { username: 'tomasebasest', email: 'test@test.com', password: "34564532567" } )
            .end(() => {
                User.count().then(newCount => {
                    assert(count + 1 === newCount);
                    done();
                });
                
            });
        });
        
        
    });

     it('PUT to amirohAPI/users to update update', done => {
        const user = new User({ username: 'tomasebest', email: 't@t.com', password: "34564532567" });

        user.save().then(() => {
            request(app)
                .put(`/AmirohAPI/users/${user._id}`)
                .send({ email: 'tomas@t.com' })
                .end(() => {
                    User.findOne({ email: 'tomas@t.com' })
                    .then(user => {
                        assert(user.username === 'tomasebest');
                        done();
                    });
 
                })
        })

    }); 

     it('DELETE to amirohapi/users deletes a user', (done) => {
        const user = new User({ username: 'tomasebest', email: 't@t.com', password: "34564532567" });
        user.save().then(() => {
            request(app)
            .delete(`/AmirohAPI/users/${user._id}`)
            .end(() => {
                User.findOne({ email: 't@t.com' })
                .then(user => {
                    assert(user === null);
                    done();
                });
               
            });
        });
    });  
        

    


});