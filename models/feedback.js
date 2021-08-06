// corrine
// model for student feedback
module.exports = (sequelize, Sequelize) => {
	const Feedback = sequelize.define('feedback', {
     
        feedback: {
            type: Sequelize.STRING,
            field: 'feedback' 
          }
          
	
	});
	
	return Feedback;
}