/**
 * 
 * Author:Dawtie 
 * Model class for audio message
 *  
 */
 module.exports = (sequelize, Sequelize) => {
	const Audio = sequelize.define('audio', {
      audioFile: {
        type: Sequelize.BLOB,
        field:'audio_file'
      },
      time: {
        type: Sequelize.DATE, 
         defaultValue: Sequelize.NOW
      }
    
	});
	
	return Audio;
}