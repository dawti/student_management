//arsheena teacher attendance
// module.exports = (sequelize, Sequelize) => {
// 	const TeachAttend = sequelize.define('teach_attend', {
    //   presentHour: {
    //     type: Sequelize.FLOAT,
    //     field: 'present_hour' 
    //   },
    //   absentHour: {
    //     type: Sequelize.FLOAT,
    //     field: 'absent_hour' 
    //   },
    //   totalHour: {
    //     type: Sequelize.FLOAT,
    //     field: 'total_hour'
    // }
// 	});
	
// 	return TeachAttend;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeachAttend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TeachAttend.init({
    presentHour: {
      type: DataTypes.FLOAT,
      field: 'present_hour' 
    },
    absentHour: {
      type: DataTypes.FLOAT,
      field: 'absent_hour' 
    },
    totalHour: {
      type: DataTypes.FLOAT,
      field: 'total_hour'
  }
  }, {
    sequelize,
    modelName: 'teach_attend',
  });
  TeachAttend.associate = (models) => {
    TeachAttend.belongsTo(models.course);
    TeachAttend.belongsTo(models.class);
    TeachAttend.belongsTo(models.teacher);
  }
  return TeachAttend;
};