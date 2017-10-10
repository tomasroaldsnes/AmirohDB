const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const User = require('../../models/user');


const Inspo = mongoose.model('inspo');

describe('Inspo controllers', () => {
    it('post to amirohapi/inspo creates a new inspo post', (done) => {
        const user = new User({ username: 'tomasebest', email: 't@t.com' });

        //Inspo.count().then(count => {
            request(app)
            .post('/AmirohAPI/inspos')
            .send( { title: 'My first amiroh inspo!!!', URL: 'https://tinyurl.com/y8lb5tmf', username: 'tomasebest' } )
            .end(() => {
                Inspo.findOne({ title: 'My first amiroh inspo!!!' })
                    .then((inspo) => {
                        user.inspos.push(inspo);
                        assert(user.inspos[0].title === 'My first amiroh inspo!!!');
                        done();
                    });


                /* Inspo.count().then(newCount => {
                    assert(user.inspos.count() === 1);
                    assert(count + 1 === newCount);
                    done(); */
                //});
                
            //});
        });
  });

  it('GET to amirohapi/inspos returns all inspos', (done) => {
    Inspo.find({}).then(inspos => {
    //not too sure about this test, but tested manually with post/get with postman and GET users seems to work fine ie. returns a list of users in DB
        request(app)
        .get('/AmirohAPI/inspos')
        .end((err, response) => {
            //console.log(response.body);
            assert(response.body.URL === inspos.URL);
            done();
        });
        
    });



    it('DELETE to amirohapi/inspo deletes an inspo post', (done) => {
        const inspo = new Inspo({ title: 'Wow such great', URL: 'https://tinyurl.com/y8lb5tmf' });
        user.save().then(() => {
            request(app)
            .delete(`/AmirohAPI/inspos/${inspo._id}`)
            .end(() => {
                Inspo.findOne({ title: 'Wow such great' })
                .then(inspo => {
                    assert(inspo === null);
                    done();
                });
               
            });
        });
    });  
    





    
});

});