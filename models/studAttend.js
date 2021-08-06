//arsheena student attendance
module.exports = (sequelize, Sequelize) => {
	const StudAttend = sequelize.define('stud_attend', {
      presentHour: {
        type: Sequelize.FLOAT,
        field: 'present_hour' 
      },
      absentHour: {
        type: Sequelize.FLOAT,
        field: 'absent_hour' 
      },
      date: {
        type: Sequelize.DATE
    }
	});
	
	return StudAttend;
}