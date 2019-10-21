const router = require(express).Router();
const Users = require('../auth/auth-model.js');
const Celebs = require('./celeb-model.js');

router.get('/users', (req, res) => {
    Users.find()
      .then(users => {
          res.json(users);
      })
      .catch(err => {
          res.status(500).json({ message: 'failed to get users from database'});
      });
});

router.get('/users/:id', (req, res) => {
    const { id } = req.params;

    Users.findById(id)
      .then(user => {
          if(user) {
              res.json(user);
          } else {
              res.status(404).json({ message: 'could not find user with given id'});
          }
      })
      .catch(err => {
          res.status(500).json({ message: 'failed to get users from db'});
      });
});

