//arsheena student assignment
// module.exports = (sequelize, Sequelize) => {
// 	const StudAssignment = sequelize.define('stud_assign', {
//       assignment:{
//         type: Sequelize.STRING 
//       }
// 	});
	
// 	return StudAssignment;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudAssignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudAssignment.init({
    assignmentPaper: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'stud_assign',
  });
  StudAssignment.associate = (models) => {
    StudAssignment.belongsTo(models.teacher);
    StudAssignment.belongsTo(models.course);
    StudAssignment.belongsTo(models.studreg);
    StudAssignment.belongsTo(models.assignment);
  }
  return StudAssignment;
};