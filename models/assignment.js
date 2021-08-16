//arsheena assignment
// module.exports = (sequelize, Sequelize) => {
// 	const Assignment = sequelize.define('assignment', {
//       assignment: {
//         type: Sequelize.STRING 
//       },
//       date_of_submission: {
//         type: Sequelize.DATE
//       }
// 	});
	
// 	return Assignment;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Assignment.init({
    assignment: DataTypes.STRING,
    date_of_submission: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'assignment',
  });
  Assignment.associate = (models) => {
    Assignment.belongsTo(models.teacher);
    Assignment.belongsTo(models.course);
    Assignment.belongsTo(models.class);
    Assignment.hasMany(models.stud_assign);

  }
  return Assignment;
};