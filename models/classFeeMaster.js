// corrine
// model for class fees master /fee amount / yearly / class wise
module.exports = (sequelize, Sequelize) => {
	const ClassFeeMaster = sequelize.define('class_fee_master', {
     
        financialYear: {
            type: Sequelize.DATE,
            field: 'financial_year' 
          },
          amount: {
            type: Sequelize.FLOAT,
            field: 'amount' 
          }
          
	
	});
	
	return ClassFeeMaster;
}