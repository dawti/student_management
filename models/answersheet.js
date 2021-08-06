//Jagan Answer Sheet
module.exports = (sequelize, Sequelize) => {
	const AnswerSheet = sequelize.define('answersheet', {
    
        ansSheet: {
      type: Sequelize.STRING,
      field: 'answer_sheet'
    }
	 
	});
	
	return AnswerSheet;
}