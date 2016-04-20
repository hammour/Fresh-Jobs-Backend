require('./User');
require('./jobs');
module.exports = bookshelf.model('Company', {
	tableName: 'companies',
	hasTimestamps: ['createdAt', 'updatedAt','deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	},
	job: function() {
		return this.hasMany('Job', 'companyId');
	}
});