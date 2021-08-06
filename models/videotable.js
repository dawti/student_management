//Jagan Video record

module.exports = (sequelize, Sequelize) => {
	const VideoTable = sequelize.define('videotable', {
    
    video: {
      type: Sequelize.STRING
    },
	
	});
	
	return VideoTable;
}