const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('The express app', () => {
    it('handlet GET request to api', (done) => {
        request(app)
        .get('/AmirohAPI')
        //error is something wrong with request, not message
        .end((err, response) => {
            assert(response.body.hi === 'there');
            done();
        });
    });


});