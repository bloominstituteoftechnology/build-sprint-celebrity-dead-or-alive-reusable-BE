const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
    findBy,
    // update,
    // remove
};

function find() {
    return db('users')
      .select('id', 'username');
};

function findById(id) {
    return db('users')
      .where(id);
};

function findBy(filter) {
    return db('users')
      .where(filter);
};

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return db('users').where({id}).first();
}