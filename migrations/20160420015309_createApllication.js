exports.up = function(knex, Promise) {
  return knex.schema.createTable('applications', function(t) {
  		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.text('coverLetter').notNull();
		t.string('resumeUrl').notNull();
		t.integer('userId').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('applications');
};