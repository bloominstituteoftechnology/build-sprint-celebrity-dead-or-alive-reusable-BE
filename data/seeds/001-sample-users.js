
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'flash', password: 'wallysux', score: 120},
        {id: 2, username: 'wonderwoman', password: 'balady', score: 92},
        {id: 3, username: 'swampthing', password: 'greenisgood', score: 950}
      ]);
    });
};
