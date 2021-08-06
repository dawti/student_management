module.exports = (sequelize, Sequelize) => {
	const Parent = sequelize.define('parent', {
        father_name: {
        type: Sequelize.STRING,
        field: 'father_name' 
      },
      mother_name: {
        type: Sequelize.STRING,
        field: 'mother_name' 
      },
    //   mother_name: {
    //     type: Sequelize.INTEGER
    // },
  
	});
	
	return Parent;
}