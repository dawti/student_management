//Jagan pdf model
// module.exports = (sequelize, Sequelize) => {
// 	const PdfTable = sequelize.define('pdftable', {
    
//         pdf: {
//       type: Sequelize.STRING
//     }
	 
// 	});
	
// 	return PdfTable;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PdfTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  };
  PdfTable.init({
    pdf: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'pdftable',
  });
  PdfTable.associate = (models) => {
    PdfTable.belongsTo(models.class);
    PdfTable.belongsTo(models.teacher);
    PdfTable.belongsTo(models.course);
  }
  return PdfTable;
};