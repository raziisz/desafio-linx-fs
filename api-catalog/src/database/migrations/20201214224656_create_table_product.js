
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.string('id').unique().notNullable().primary();
    table.string('name', 255).notNullable();
    table.timestamp('clientLastUpdated');
    table.decimal('oldPrice');
    table.timestamp('created');
    table.text('image');
    table.string('brand', 100);
    table.string('categories', 200);
    table.decimal('price');
    table.text('description');
    table.string('type', 100);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
