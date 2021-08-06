//ARSHEENA parent
module.exports = (sequelize, Sequelize) => {
    const Parent = sequelize.define('parent', {
      fatherName: {
        type: Sequelize.STRING,
        field: 'father_name'
      },
      motherName: {
        type: Sequelize.STRING,
        field: 'mother_name'
      }
    });
  
    return Parent;
  }