// corrine
// model for student fees
// module.exports = (sequelize, Sequelize) => {
// 	const StudFee = sequelize.define('stud_fee', {
     
//       studFeeAmount: {
//         type: Sequelize.FLOAT,
//         field: 'stud_fee_amount' 
//       },
      
	
// 	});
	
// 	return StudFee;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudFee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudFee.init({
    studFeeAmount: DataTypes.FLOAT,

  }, {
    sequelize,
    modelName: 'stud_fee',
  });
  StudFee.associate = (models) => {
    StudFee.belongsTo(models.class);
    StudFee.belongsTo(models.fee);
    StudFee.belongsTo(models.studreg);
    StudFee.hasMany(models.stud_fee_master);

  }
  return StudFee;
};