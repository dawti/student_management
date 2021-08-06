module.exports = (sequelize, Sequelize) => {
	const Answersheet = sequelize.define('answersheet', {
    
        anssheet: {
      type: Sequelize.STRING
    }
	 
	});
	
	return Answersheet;
}