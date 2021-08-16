// corrine
// model for class fees
// module.exports = (sequelize, Sequelize) => {
// 	const ClassFee = sequelize.define('class_fee', {
     
//         classFeeAmount: {
//             type: Sequelize.FLOAT,
//             field: 'class_fee_amount' 
//           },
          
	
// 	});
	
// 	return ClassFee;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassFee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ClassFee.init({
    classFeeAmount: DataTypes.FLOAT,

  }, {
    sequelize,
    modelName: 'class_fee',
  });
  ClassFee.associate = (models) => {
    ClassFee.belongsTo(models.class);
    ClassFee.belongsTo(models.fee);
    ClassFee.hasMany(models.payment);//hasone?

  }
  return ClassFee;
};