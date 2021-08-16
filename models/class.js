/**
 * 
 * Author:Dawtie 
 * Model class for class
 *  
 */
 'use strict';
 const {
   Model
 } = require('sequelize');
 module.exports = (sequelize, DataTypes) => {
   class Class extends Model {
     /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
      */
     static associate(models) {
       // define association here
     }
   };
   Class.init({
     name: DataTypes.STRING,
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
     modelName: 'class',
   });
   Class.associate = (models) => {
     Class.belongsTo(models.teacher);
     Class.hasMany(models.timetable);
     Class.hasMany(models.assignment);
     Class.hasMany(models.class_fee);
     Class.hasMany(models.class_fee_master);
     Class.hasMany(models.pdftable);
     Class.hasMany(models.questionpaper);
     Class.hasMany(models.stud_fee);
     Class.hasMany(models.teach_attend);
     Class.hasMany(models.studreg);
     Class.hasMany(models.videotable);
    }
   return Class;
 };
 
