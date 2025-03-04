/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('cars', (table) => {
      table.increments('id').primary(); // Auto-incrementing ID
      table.string('make').notNullable();
      table.string('model').notNullable();
      table.integer('year');
      table.float('price_per_day');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('cars'); // Undo the migration
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
