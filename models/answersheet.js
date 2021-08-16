//Jagan Answer Sheet
// module.exports = (sequelize, Sequelize) => {
// 	const AnswerSheet = sequelize.define('answersheet', {
    
//         ansSheet: {
//       type: Sequelize.STRING,
//       field: 'answer_sheet'
//     }
	 
// 	});
	
// 	return AnswerSheet;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnswerSheet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AnswerSheet.init({
    answer_sheet: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'answersheet',
  });
  AnswerSheet.associate = (models) => {
    AnswerSheet.belongsTo(models.studreg);
    AnswerSheet.belongsTo(models.course);
  }
  return AnswerSheet;
};