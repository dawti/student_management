module.exports = (sequelize, Sequelize) => {
	const Login = sequelize.define('login', {
	  
	  userName: {
		  type: Sequelize.STRING
	  },
      password: {
        type: Sequelize.STRING
      },
	  userType: {
		  type: Sequelize.STRING
	  },
	  loginDate: {
		  type: Sequelize.DATE
	  }
	});
	
	return Login;
}