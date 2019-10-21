const router = require('express').Router();
const Users = require('../auth/auth-model.js');
const Celebs = require('./celeb-model.js');

//access protected user info

router.get('/users', (req, res) => {
    Users.find()
      .then(users => {
          res.json(users);
      })
      .catch(err => {
          res.status(500).json({ message: 'failed to get users from database'});
      });
});

router.get(`/users/:id`, (req, res) => {
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

//add points to a user
router.put('/users/:id', (req, res) => {
    const changes = req.body;
    console.log(req.body)
    const { id } = req.params;

    if (changes.score) {
        Users.addPoints(changes, id)
          .then(() => {
              res.status(200).json(changes);
          })
          .catch(err => {
              res.status(500).json({ message: 'error adding points to user'});
          });
    } else {
        res.status(400).json({ error: 'no changes to points total made'});
    };
});

//delete a user
router.delete('/users/:id', (req, res) => {
    const {id } = req.params;
    Users.remove(id)
      .then(deleted => {
          if (deleted) {
              res.json({ removed: deleted});
          } else {
              res.status(404).json({ error: 'could not find user with that id'});
          }
      })
      .catch(err => {
          res.status(500).json({ message: 'failed to delete user'})
      })
})

//add/update/delete celebrities

router.post('/celebs', (req, res) => {
    const celeb = req.body;
    
    Celebs.add(celeb)
      .then(saved => {
          res.status(201).json(saved);
      })
      .catch(err => {
          res.status(500).json({ message: 'unable to add celebrity to the database'});
      });
});



module.exports = router;

