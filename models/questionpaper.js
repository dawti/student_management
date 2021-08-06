//Jagan Question paper

module.exports = (sequelize, Sequelize) => {
	const QuestionPaper = sequelize.define('questionpaper', {
    
        qstPaperPdf: {
      type: Sequelize.STRING,
      field: 'question_paper_pdf'
    },
	  dateTime: {
		  type: Sequelize.STRING,
          field: 'date_time'
	  },
	 
	});
	
	return QuestionPaper;
}