//Jagan Time table

module.exports = (sequelize, Sequelize) => {
	const TimeTable = sequelize.define('timetable', {
    
    day: {
      type: Sequelize.STRING
    },
	  time: {
		  type: Sequelize.STRING
	  },
	  duration: {
		  type: Sequelize.STRING
	  }
	});
	
	return TimeTable;
}