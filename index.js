const app = require('./app');

//always listens for incoming http request on port 2050
app.listen(3000, () => {
    console.log('Running on port 3000');
});
