// corrine
// model for student feedback
// module.exports = (sequelize, Sequelize) => {
// 	const Feedback = sequelize.define('feedback', {
     
//         feedback: {
//             type: Sequelize.STRING,
//             field: 'feedback' 
//           }
          
	
// 	});
	
// 	return Feedback;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Feedback.init({
    feedback: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'feedback',
  });
  
  Feedback.associate = (models) => {
    Feedback.belongsTo(models.studreg);
    Feedback.belongsTo(models.teacher);
    Feedback.belongsTo(models.course);

  }

  return Feedback;
};