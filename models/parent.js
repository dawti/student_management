//ARSHEENA parent
// module.exports = (sequelize, Sequelize) => {
//     const Parent = sequelize.define('parent', {
      // fatherName: {
      //   type: Sequelize.STRING,
      //   field: 'father_name'
      // },
      // motherName: {
      //   type: Sequelize.STRING,
      //   field: 'mother_name'
      // }
//     });
  
//     return Parent;
//   }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Parent.init({
    fatherName: {
      type: DataTypes.STRING,
      field: 'father_name'
    },
    motherName: {
      type: DataTypes.STRING,
      field: 'mother_name'
    }
  }, {
    sequelize,
    modelName: 'parent',
  });
  Parent.associate = (models) => {
    Parent.hasMany(models.studreg);
  }
  return Parent;
};