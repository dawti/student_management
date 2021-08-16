/**
 * 
 * Author:Dawtie 
 * Model class for class year
 *  
 */
//  module.exports = (sequelize, Sequelize) => {
// 	const ClassYear = sequelize.define('classyear', {
//       name: {
//         type: Sequelize.STRING,
       
//       },
//       startDate: {
//         type: Sequelize.DATE,
//         field: 'start_date' 
//       },
//       endDate: {
//         type: Sequelize.DATE,
//         field: 'end_date' 
//     }
    
// 	});
	
// 	return ClassYear;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassYear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ClassYear.init({
    name: {
      type: DataTypes.STRING,
     
    },
    startDate: {
      type: DataTypes.DATE,
      field: 'start_date' 
    },
    endDate: {
      type: DataTypes.DATE,
      field: 'end_date' 
  }

  }, {
    sequelize,
    modelName: 'classyear',
  });
  // AnswerSheet.associate = (models) => {
  //   User.hasMany(models.UserFollower);
  // }
  return ClassYear;
};