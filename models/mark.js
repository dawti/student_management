/**
 * 
 * Author:Dawtie 
 * Model class for mark
 *  
 */
 'use strict';
 const {
   Model
 } = require('sequelize');
 module.exports = (sequelize, DataTypes) => {
   class Mark extends Model {
     /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
      */
     static associate(models) {
       // define association here
     }
   };
   Mark.init({
    mark: {
      type: DataTypes.FLOAT,
      field: 'mark_obtained' 
    }
   }, {
     sequelize,
     modelName: 'exammark',
   });
   Mark.associate = (models) => {
     Mark.belongsTo(models.studreg);
 	Mark.belongsTo(models.course);
 	Mark.belongsTo(models.examtype);
   }
   return Mark;
 };
 
