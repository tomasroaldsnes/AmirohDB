const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/AmirohDB_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warning', error);
        });


beforeEach(done => {
    const {users} = mongoose.connection.collections;
    const {inspos} = mongoose.connection.collections;
    users.drop()
        .then(() => inspos.drop())
        .then(() => done())
        .catch(() => done());

});

})