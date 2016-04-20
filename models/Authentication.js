require('./User');
module.exports = bookshelf.model('Authentication', {
	tableName: 'authentication',
	hasTimestamps: ['createdAt', 'updatedAt','deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});