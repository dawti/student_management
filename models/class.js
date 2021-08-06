/**
 * 
 * Author:Dawtie 
 * Model class for teacher
 *  
 */
module.exports = (sequelize, Sequelize) => {
	const Class = sequelize.define('class', {
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
	
	return Class;
}