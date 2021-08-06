// corrine
// model for student fees master
module.exports = (sequelize, Sequelize) => {
	const StudFeeMaster = sequelize.define('stud_fee_master', {
     
      totalAmount: {
        type: Sequelize.FLOAT,
        field: 'total_amount' 
      }
      
	
	});
	
	return StudFeeMaster;
}