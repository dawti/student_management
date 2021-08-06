// corrine
// model for class fees
module.exports = (sequelize, Sequelize) => {
	const ClassFee = sequelize.define('class_fee', {
     
        classFeeAmount: {
            type: Sequelize.FLOAT,
            field: 'class_fee_amount' 
          },
          
	
	});
	
	return ClassFee;
}