module.exports = (sequelize, Sequelize) => {
	const Teacher = sequelize.define('teacher', {
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name' 
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name' 
      },
      salary: {
        type: Sequelize.INTEGER
    },
    experience: {
      type: Sequelize.FLOAT
    },
	  gender: {
		  type: Sequelize.STRING
	  },
	  mobile: {
		  type: Sequelize.STRING
	  }
	});
	
	return Teacher;
}