// corrine
// model for payment school income

module.exports = (sequelize, Sequelize) => {
	const Payment = sequelize.define('payment', {
     
        bankAccountNo: {
        type: Sequelize.STRING,
        field: 'bank_account_no' 
      },
      date: {
        type: Sequelize.DATE,
        field: 'date' 
      },
      ifscCode: {
        type: Sequelize.STRING,
        field: 'ifsc_code' 
      }
      
	
	});
	
	return Payment;
}