
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('celebs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('celebs').insert([
        {name: 'Terry Pratchett', info: 'British Author', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/173/433425.jpg', dead: 'true'},
        {name: 'Robin Williams', info: 'American Actor/Comedian', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/3/8146.jpg', dead: 'true'},
        {name: 'Meryl Streep', info: 'American Actress', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11052.jpg', dead: 'false'},
        {name: 'Harrison Ford', info: 'American Actor', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/44/112046.jpg', dead: 'false'},
        {name: 'Anne Hathaway', info: 'American Actress', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/12/30211.jpg', dead: 'false'},
        {name: 'Morgan Freeman', info: 'American Actor', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/47/119670.jpg', dead: 'false'},
        {name: 'Lucille Ball', info: 'American Actress/Comedian', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/38/95817.jpg', dead: 'true'},
        {name: 'Carol Channing', info: 'American Actress/Singer/Dancer/Comedian', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/104/260030.jpg', dead: 'true'},
        {name: 'Danny Masterson', info: 'American Actor/DJ', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/3/8698.jpg', dead: 'false'},
        {name: 'John Carpenter', info: 'American Filmmaker/Composer', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/119/298830.jpg', dead: 'false'},
        {name: 'Alfred Hitchcock', info: 'English Filmmaker', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/19/47851.jpg', dead: 'true'},
        {name: 'Melissa McCarthy', info: 'American Actress/Comedian', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/3/8341.jpg', dead: 'false'},
        {name: `Sinead O'Connor`, info: 'Irish Singer/Songwriter', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/40/102422.jpg', dead: 'false'},
        {name: 'Donal Logue', info: 'Canadian Actor', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/162/406394.jpg', dead: 'false'},
        {name: 'Regina King', info: 'American Actress/Director', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/40/100106.jpg', dead: 'false'},
        {name: 'Brittany Murphy', info: 'American Actress/Singer/Voicework Artist', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/12/30531.jpg', dead: 'true'},
        {name: 'Timothy Omundson', info: 'American Actor', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/5/12515.jpg', dead: 'false'},
        {name: 'James Roday', info: 'American Actor/Director', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/5/12513.jpg', dead: 'false'},
        {name: 'Maggie Lawson', info: 'American Actress', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/5/12517.jpg', dead: 'false'},
        {name: 'June Lockhart', info: 'American Actress', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/2/5920.jpg', dead: 'false'},
        {name: 'Amy Winehouse', info: 'English Singer/Songwriter', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/60/151455.jpg', dead: 'true'},
        {name: 'Madonna', info: 'American Singer/Songwriter/Actress', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/33/84339.jpg', dead: 'false'},
        {name: 'Paul Walker', info: 'American Actor', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/55/138054.jpg', dead: 'true'},
        {name: 'Whitney Houston', info: 'American Singer/Actress', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/43/109754.jpg', dead: 'true'},
        {name: 'Yvonne Strahovski', info: 'Australian Actress', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2380.jpg', dead: 'false'},
        {name: 'Betty White', info: 'American Actress/Comedian', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/3/7898.jpg', dead: 'false'},
        {name: 'Kirk Douglas', info: 'American Actor', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/106/266745.jpg', dead: 'false'},
        {name: 'Gary Coleman', info: 'American Actor', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/95/237514.jpg', dead: 'true'},
        {name: 'Sean Connery', info: 'English Actor', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/159/398910.jpg', dead: 'false'},
        {name: 'Tony Bennett', info: 'American Singer', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/31/78646.jpg', dead: 'false'},
        {name: 'Ralph Macchio', info: 'American Actor', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/31/79799.jpg', dead: 'false'},
        {name: 'Angela Lansbury', info: 'English Actress/Singer', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/19/49161.jpg', dead: 'false'},
        {name: 'Marilyn Monroe', info: 'American Actress/Singer', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/26/65653.jpg', dead: 'true'},
        {name: 'Lil Peep', info: '', imageurl: '', dead: ''},
        {name: 'Ricky Harris', info: 'American Actor/Comedian', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/90/227303.jpg', dead: 'true'},
        {name: 'Alexis Arquette', info: 'American Actress/Cabaret Performer/Cartoonist', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/32/80815.jpg', dead: 'true'},
        {name: 'Chyna', info: 'American Wrestler', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/37/93256.jpg', dead: 'true'},
        {name: 'Peaches Geldof', info: 'English Columnist/TV Personality', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/88/221325.jpg', dead: 'true'},
        {name: 'Cory Monteith', info: 'Candaian Actor/Singer', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/3/8315.jpg', dead: 'true'},
        {name: 'Prince', info: 'American Singer/Songwriter', imageurl: 'https://static.tvmaze.com/uploads/images/medium_portrait/45/114336.jpg', dead: 'true'}

      ]);
    });
};

//for my reference
//    {name: '', info: '', imageurl: '', dead: ''}
