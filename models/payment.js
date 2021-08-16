// corrine
// model for payment school income

// module.exports = (sequelize, Sequelize) => {
// 	const Payment = sequelize.define('payment', {
     
//         bankAccountNo: {
//         type: Sequelize.STRING,
//         field: 'bank_account_no' 
//       },
//       date: {
//         type: Sequelize.DATE,
//         field: 'date' 
//       },
//       ifscCode: {
//         type: Sequelize.STRING,
//         field: 'ifsc_code' 
//       }
      
	
// 	});
	
// 	return Payment;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Payment.init({
    bankAccountNo: DataTypes.STRING,
    date: DataTypes.DATE,
    ifscCode: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'payment',
  });
  Payment.associate = (models) => {
    Payment.belongsTo(models.school);
    Payment.belongsTo(models.class_fee);

  }
  return Payment;
};