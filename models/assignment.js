//arsheena assignment
module.exports = (sequelize, Sequelize) => {
	const Assignment = sequelize.define('assignment', {
      assignment: {
        type: Sequelize.STRING 
      },
      date_of_submission: {
        type: Sequelize.DATE
      }
	});
	
	return Assignment;
}