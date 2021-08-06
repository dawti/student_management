//arsheena student assignment
module.exports = (sequelize, Sequelize) => {
	const StudAssignment = sequelize.define('stud_assign', {
      assignment: {
        type: Sequelize.STRING 
      }
	});
	
	return StudAssignment;
}