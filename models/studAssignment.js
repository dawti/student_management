//arsheena student assignment
module.exports = (sequelize, Sequelize) => {
	const StudAssignment = sequelize.define('stud_assign', {
      assignment_no: {
        type: Sequelize.INTEGER
      },
      assignment: {
        type: Sequelize.STRING 
      }
	});
	
	return StudAssignment;
}