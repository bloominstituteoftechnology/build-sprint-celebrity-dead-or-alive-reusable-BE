const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "flash", password: bcrypt.hashSync('wallysux', 14), 'score': 120},
        { username: 'wonderwoman', password: bcrypt.hashSync('balady', 14), 'score': 92},
        { username: 'swampthing', password: bcrypt.hashSync('greenisgood', 14), 'score': 950}
      ]);
    });
};
