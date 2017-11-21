const UserController = require('../controllers/user_controllers');
const InspoController = require('../controllers/inspo_controllers');

module.exports = (app) => {
    //watch for incoming request of type GET
//on the route of //http:localhost:3050/api
app.get('/AmirohAPI', UserController.greeting);

//routes for manipulating user information
app.get('/AmirohAPI/users', UserController.users); //get all users
app.get('/AmirohAPI/users/:id', UserController.userId); //get one user from id
app.get('/AmirohAPI/users/username/:username', UserController.userUsername); //get one user from username
app.post('/AmirohAPI/users', UserController.create); //create new user
app.put('/AmirohAPI/users/:id', UserController.edit); //edit existing user
app.put('/AmirohAPI/users/username/:username', UserController.editUsername); //edit existing user with username
app.delete('/AmirohAPI/users/:id', UserController.delete); //delete existing user from id

//routes for manipulating inspos
app.post('/AmirohAPI/inspos', InspoController.create); //create an inspo post
app.delete('/AmirohAPI/inspos/:id', InspoController.delete); //delete an inspo
app.get('/AmirohAPI/inspos', InspoController.inspos); //get all inspos
app.put('/AmirohAPI/inspos/:id', InspoController.edit); //edit existing inspo
app.get('/AmirohAPI/inspos/:id', InspoController.insposUserId); //get all inspos from user with userID
app.get('/AmirohAPI/inspos/user/:username', InspoController.insposUsername); //get all inspos from user with username

};