/**
 * 
 * Author:Dawtie 
 * Model class for class year
 *  
 */
 module.exports = (sequelize, Sequelize) => {
	const ClassYear = sequelize.define('classyear', {
      name: {
        type: Sequelize.STRING,
       
      },
      startDate: {
        type: Sequelize.DATE,
        field: 'start_date' 
      },
      endDate: {
        type: Sequelize.DATE,
        field: 'end_date' 
    }
    
	});
	
	return ClassYear;
}