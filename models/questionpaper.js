//Jagan Question paper

// module.exports = (sequelize, Sequelize) => {
// 	const QuestionPaper = sequelize.define('questionpaper', {
    
//         qstPaperPdf: {
//       type: Sequelize.STRING,
//       field: 'question_paper_pdf'
//     },
// 	  dateTime: {
// 		  type: Sequelize.STRING,
//           field: 'date_time'
// 	  },
	 
// 	});
	
// 	return QuestionPaper;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionPaper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  };
  QuestionPaper.init({
    qstPaperPdf: DataTypes.STRING,
	dateTime: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'questionpaper',
  });
  QuestionPaper.associate = (models) => {
    QuestionPaper.belongsTo(models.class);
    QuestionPaper.belongsTo(models.course);
  }
  return QuestionPaper;
};