
exports.up = function(knex) {
  return knex.schema.createTable('celebs', celebs => {
      celebs.increments();

      celebs
        .string('name', 255)
        .notNullable()
        .unique();

      celebs
        .string('imageurl', 255)
        .notNullable()

      celebs
        .string('info', 255)
        .notNullable();

      celebs
        .boolean('dead')
        .notNullable()
        .defaultTo(false)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('celebs');
  
};
