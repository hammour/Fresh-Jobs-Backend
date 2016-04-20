exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function(t) {
  		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('title').notNull();
		t.text('description').notNull();
		t.integer('minSalary').unsigned().nullable();
		t.integer('maxSalary').unsigned().nullable();
		t.integer('companyId').notNull();
			
		t.integer('userId').notNull();
			
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs');
};