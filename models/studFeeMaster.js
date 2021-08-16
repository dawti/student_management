// corrine
// model for student fees master
// module.exports = (sequelize, Sequelize) => {
// 	const StudFeeMaster = sequelize.define('stud_fee_master', {
     
//       totalAmount: {
//         type: Sequelize.FLOAT,
//         field: 'total_amount' 
//       }
      
	
// 	});
	
// 	return StudFeeMaster;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudFeeMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudFeeMaster.init({
    totalAmount: DataTypes.FLOAT,
    financialYear:DataTypes.DATE

  }, {
    sequelize,
    modelName: 'stud_fee_master',
  });
  StudFeeMaster.associate = (models) => {
    StudFeeMaster.belongsTo(models.studreg);
    StudFeeMaster.belongsTo(models.stud_fee);

  }
  return StudFeeMaster;
};