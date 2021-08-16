// corrine
// model for fee types
// module.exports = (sequelize, Sequelize) => {
// 	const Fee = sequelize.define('fee', {
//       feeType: {
//         type: Sequelize.STRING,
//         field: 'fee_type' 
//       }
      
	
// 	});
	
// 	return Fee;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fee.init({
    feeType: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'fee',
  });
  Fee.associate = (models) => {
    Fee.hasMany(models.class_fee);
    Fee.hasMany(models.stud_fee);

  }
  return Fee;
};