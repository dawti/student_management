/**
 * Author:Dawtie
 * Model for login
 */
 'use strict';
 const {
   Model, Sequelize
 } = require('sequelize');
 module.exports = (sequelize, DataTypes) => {
   class Login extends Model {
	 /**
	  * Helper method for defining associations.
	  * This method is not a part of Sequelize lifecycle.
	  * The `models/index` file will call this method automatically.
	  */
	 static associate(models) {
	   // define association here
	 }
   };
   Login.init({
	loginid: {
	   type: DataTypes.INTEGER,
	   primaryKey: true,
	   autoIncrement:true
	   },
	   userName: {
		 type:DataTypes.STRING,
		 unique:true
	   },
	   password: DataTypes.STRING,
		 userType: DataTypes.STRING,
		 loginDate: DataTypes.DATE,
   }, {
	 sequelize,
	 modelName: 'login',
   });
   Login.associate = (models) => {
   Login.hasOne(models.teacher,{foreignKey: 'login_fk', sourceKey: 'loginid'});
	 Login.hasOne(models.guardian);
	 Login.hasOne(models.school);
	 Login.hasMany(models.audio,{foreignKey: 'sent', sourceKey: 'loginid'});
	 Login.hasMany(models.audio,{foreignKey: 'receive', sourceKey: 'loginid'});
   }
   return Login;
 };
 