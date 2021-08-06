/**
 * 
 * Author:Dawtie 
 * Model class for mark
 *  
 */
 module.exports = (sequelize, Sequelize) => {
	const Mark = sequelize.define('exammark', {
      
      mark: {
        type: Sequelize.FLOAT,
        field: 'mark_obtained' 
      }
	});
	
	return Mark;
}