/**
 * 
 * Author:Dawtie 
 * Model class for type of exam
 *  
 */
 module.exports = (sequelize, Sequelize) => {
	const ExamType = sequelize.define('examtype', {
      
      examType: {
        type: Sequelize.STRING,
        field: 'exam_type' 
      },
      totalMark: {
        type: Sequelize.FLOAT,
        field: 'total_mark' 
    }
    
	});
	
	return ExamType;
}