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
        type: Sequelize.STRING,
        field: 'start_date' 
      },
      endDate: {
        type: Sequelize.INTEGER,
        field: 'end_date' 
    }
    
	});
	
	return Class;
}