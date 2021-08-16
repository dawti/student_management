//Jagan Time table

// module.exports = (sequelize, Sequelize) => {
// 	const TimeTable = sequelize.define('timetable', {
    
//     day: {
//       type: Sequelize.STRING
//     },
// 	  time: {
// 		  type: Sequelize.STRING
// 	  },
// 	  duration: {
// 		  type: Sequelize.STRING
// 	  }
// 	});
	
// 	return TimeTable;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  };
  TimeTable.init({
    day: DataTypes.STRING,
	time: DataTypes.STRING,
	duration: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'timetable',
  });
  TimeTable.associate = (models) => {
    TimeTable.belongsTo(models.teacher);
	TimeTable.belongsTo(models.course);
	TimeTable.belongsTo(models.class);

  }
  return TimeTable;
};