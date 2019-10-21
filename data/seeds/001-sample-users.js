
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 'username': "flash", 'password': "wallysux", 'score': 120},
        { 'username': 'wonderwoman', 'password': 'balady', 'score': 92},
        { 'username': 'swampthing', 'password': 'greenisgood', 'score': 950}
      ]);
    });
};
