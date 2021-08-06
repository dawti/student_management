//ARSHEENA student registration
module.exports = (sequelize, Sequelize) => {
    const Studreg = sequelize.define('studreg', {
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
      },
      dob: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.FLOAT
      },
      gender: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      doj: {
        type: Sequelize.STRING
      },
      guardRelation: {
        type: Sequelize.STRING
      }
    });
  
    return Studreg;
  }