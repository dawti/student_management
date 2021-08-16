// module.exports = (sequelize, Sequelize) => {
//     const Course = sequelize.define('course', {
        // name: {
        //     type: Sequelize.STRING
        // },
        // total_hour: {
        //     type: Sequelize.FLOAT
        // }
//     });
   
//     return Course;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Course.init({
    name: {
        type: DataTypes.STRING
    },
    total_hour: {
        type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'course',
  });
  Course.associate = (models) => {
    Course.hasMany(models.answersheet);
    Course.hasMany(models.assignment);
    Course.hasMany(models.feedback);
    Course.hasMany(models.exammark);
    Course.hasMany(models.pdftable);
    Course.hasMany(models.questionpaper);
    Course.hasMany(models.stud_assign);
    Course.hasMany(models.stud_attend);
    Course.hasMany(models.teach_attend);
    Course.hasMany(models.timetable);
    Course.hasMany(models.videotable);


  }
  return Course;
};