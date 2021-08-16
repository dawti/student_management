//ARSHEENA student registration
// module.exports = (sequelize, Sequelize) => {
//     const Studreg = sequelize.define('studreg', {
      // firstName: {
      //   type: Sequelize.STRING,
      //   field: 'first_name'
      // },
      // lastName: {
      //   type: Sequelize.STRING,
      //   field: 'last_name'
      // },
      // dob: {
      //   type: Sequelize.STRING
      // },
      // email: {
      //   type: Sequelize.FLOAT
      // },
      // gender: {
      //   type: Sequelize.STRING
      // },
      // mobile: {
      //   type: Sequelize.INTEGER
      // },
      // address: {
      //   type: Sequelize.STRING
      // },
      // doj: {
      //   type: Sequelize.STRING
      // },
      // guardRelation: {
      //   type: Sequelize.STRING
      // }
//     });
  
//     return Studreg;
//   }


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studreg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Studreg.init({
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    dob: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.FLOAT
    },
    gender: {
      type: DataTypes.STRING
    },
    mobile: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING
    },
    doj: {
      type: DataTypes.STRING
    },
    guardRelation: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'studreg',
  });
  Studreg.associate = (models) => {
    Studreg.hasMany(models.answersheet);
    Studreg.hasMany(models.feedback);
    Studreg.hasMany(models.exammark);
    Studreg.hasMany(models.stud_assign);
    Studreg.hasMany(models.stud_attend);
    Studreg.hasMany(models.stud_fee);
    Studreg.hasMany(models.stud_fee_master);
    Studreg.belongsTo(models.class);
    Studreg.belongsTo(models.parent);
    Studreg.belongsTo(models.guardian);
    Studreg.belongsTo(models.school);


  }
  return Studreg;
};