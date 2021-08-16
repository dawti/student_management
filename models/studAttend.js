//arsheena student attendance
// module.exports = (sequelize, Sequelize) => {
// 	const StudAttend = sequelize.define('stud_attend', {
//       presentHour: {
//         type: Sequelize.FLOAT,
//         field: 'present_hour' 
//       },
//       absentHour: {
//         type: Sequelize.FLOAT,
//         field: 'absent_hour' 
//       },
//       date: {
//         type: Sequelize.DATE
//     }
// 	});
	
// 	return StudAttend;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudAttend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudAttend.init({
    presentHour: {
              type: DataTypes.FLOAT,
              field: 'present_hour' 
            },
            absentHour: {
              type: DataTypes.FLOAT,
              field: 'absent_hour' 
            },
            date: {
              type: DataTypes.DATE
          }
  }, {
    sequelize,
    modelName: 'stud_attend',
  });
  StudAttend.associate = (models) => {
    StudAttend.belongsTo(models.course);
    StudAttend.belongsTo(models.studreg);
    StudAttend.belongsTo(models.teacher);
  }
  return StudAttend;
};