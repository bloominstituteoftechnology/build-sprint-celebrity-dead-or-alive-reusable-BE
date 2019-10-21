const db = require('../data/dbConfig.js');

module.exports = {
    
    find,
    findById,
    findBy,
    add,
    update,
    remove
};

function find() {
    return db('celebs')
      .select('id', 'name', 'info', 'dead');
};

function findById(id) {
    return db('celebs')
      .where(id)
}

function findBy(filter) {
    return db('celebs')
      .where(filter);
};

async function add(celeb) {
    const [id] = await db('celebs').insert(celeb, 'id');
    return db('celebs').where({id}).first();
};

function update(id, celeb) {
    return db('celebs')
      .where('id', Number(id))
      .update(celeb);
};

function remove(id) {
    return db('celebs')
      .where('id', Number(id))
      .del();
}