/**
 * 
 * Author:Dawtie 
 * Model class for type of exam
 *  
 */
 'use strict';
 const {
   Model
 } = require('sequelize');
 module.exports = (sequelize, DataTypes) => {
   class ExamType extends Model {
     /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
      */
     static associate(models) {
       // define association here
     }
   };
   ExamType.init({
    examType: {
      type: DataTypes.STRING,
      field: 'exam_type' 
    },
    totalMark: {
      type: DataTypes.FLOAT,
      field: 'total_mark' 
  }
  
   }, {
     sequelize,
     modelName: 'examtype',
   });
   ExamType.associate = (models) => {
    ExamType.hasMany(models.exammark);
 
   }
   return ExamType;
 };
 


 