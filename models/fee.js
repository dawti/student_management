// corrine
// model for fee types
module.exports = (sequelize, Sequelize) => {
	const Fee = sequelize.define('fee', {
      feeType: {
        type: Sequelize.STRING,
        field: 'fee_type' 
      }
      
	
	});
	
	return Fee;
}