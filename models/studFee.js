// corrine
// model for student fees
module.exports = (sequelize, Sequelize) => {
	const StudFee = sequelize.define('stud_fee', {
     
      studFeeAmount: {
        type: Sequelize.FLOAT,
        field: 'stud_fee_amount' 
      },
      
	
	});
	
	return StudFee;
}