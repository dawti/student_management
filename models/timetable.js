module.exports = (sequelize, Sequelize) => {
	const Timetable = sequelize.define('timetable', {
    
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
	
	return Timetable;
}