//arsheena teacher attendance
module.exports = (sequelize, Sequelize) => {
	const TeachAttend = sequelize.define('teach_attend', {
      presentHour: {
        type: Sequelize.FLOAT,
        field: 'present_hour' 
      },
      absentHour: {
        type: Sequelize.FLOAT,
        field: 'absent_hour' 
      },
      totalHour: {
        type: Sequelize.FLOAT,
        field: 'total_hour'
    }
	});
	
	return TeachAttend;
}