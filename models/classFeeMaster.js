// corrine
// model for class fees master /fee amount / yearly / class wise
// module.exports = (sequelize, Sequelize) => {
// 	const ClassFeeMaster = sequelize.define('class_fee_master', {
     
//         financialYear: {
//             type: Sequelize.DATE,
//             field: 'financial_year' 
//           },
//           amount: {
//             type: Sequelize.FLOAT,
//             field: 'amount' 
//           }
          
	
// 	});
	
// 	return ClassFeeMaster;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassFeeMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ClassFeeMaster.init({
    financialYear: DataTypes.DATE,
    amount: DataTypes.FLOAT,

  }, {
    sequelize,
    modelName: 'class_fee_master',
  });
  ClassFeeMaster.associate = (models) => {
    ClassFeeMaster.belongsTo(models.class);
  }
  return ClassFeeMaster;
};