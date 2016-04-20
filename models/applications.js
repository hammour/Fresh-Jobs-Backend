require('./User');
module.exports = bookshelf.model('application', {
	tableName: 'applications',
	hasTimestamps: ['createdAt', 'updatedAt','deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});