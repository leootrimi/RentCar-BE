const knex = require('../config/database');

const Car = {
  getAll: async () => {
    return await knex('cars').select('*');
  },
  getById: async (id) => {
    return await knex('cars').where('id', id).first();
  },
  create: async (data) => {
    const [id] = await knex('cars').insert(data);
    return { id, ...data };
  },
  update: async (id, data) => {
    const changes = await knex('cars').where('id', id).update(data);
    return changes > 0 ? { id, ...data } : null;
  },
  delete: async (id) => {
    const changes = await knex('cars').where('id', id).del();
    return changes > 0;
  },
};

module.exports = Car;