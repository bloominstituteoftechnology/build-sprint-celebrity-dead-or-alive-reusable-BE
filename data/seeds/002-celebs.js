
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('celebs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('celebs').insert([
        {name: 'Terry Pratchett', info: 'British Author', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/173/433425.jpg', dead:'true'},
        {name: 'Robin Williams', info: 'American Actor/Comedian', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/3/8146.jpg', dead:'true'},
        {name: 'Meryl Streep', info: 'American Actress', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11052.jpg', dead:'false'}
      ]);
    });
};
