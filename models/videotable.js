module.exports = (sequelize, Sequelize) => {
	const Videotable = sequelize.define('videotable', {
    
    video: {
      type: Sequelize.STRING
    },
	
	});
	
	return Videotable;
}