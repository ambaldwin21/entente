exports.up = function(knex) {
  return knex.schema.createTable('issues', (table) => {
    table.increments();
    table.string('issue').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('issues');
};
