
const Inspo = require('./models/inspo');

const MINIMUM_USERS = 2;
const USERS_TO_ADD = 15;

let userCollection;
const db = new Db('Amiroh_test', new Server('localhost', 3050));
db.open()
  .then(() => {
    userCollection = db.collection('artists');
    return userCollection.count({});
  })
  .then(count => {
    if (count < MINIMUM_USERS) {
      const users = _.times(USERS_TO_ADD, () => createUser());

      userCollection.insertMany(users);
    }
  })
  .catch(e => console.log(e));


function createUser() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    profileDescription: faker.lorem.sentence(),
    profilePicture: faker.image.imageUrl(),
    inspos: getInspos()
  };
}

function getInspos() {
    let inspo = new Inspo({
        title: faker.lorem.sentence(),
        description: faker.lorem.sentences(),
        URL: faker.image.imageUrl(),
        username: faker.internet.userName(),
        productsUsed: ['Mascara', 'Eyeliner', 'Rush', 'Foam'],
        claps: faker.random.number(),
    });
  
}


function randomEntry(array) {
  return array[~~(Math.random() * array.length)];
}

function randomBetween(min, max) {
  return ~~(Math.random() * (max-min)) + min;
}
