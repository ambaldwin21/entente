exports.up = function(knex) {
  return knex.schema.createTable('ratings', (table) => {
    table.increments();
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .index();
    table.integer('issue_id')
    .notNullable()
    .references('id')
    .inTable('issues')
    .onDelete('CASCADE')
    .index();
    table.string('rating').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ratings');
};
