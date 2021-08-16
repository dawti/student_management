/**
 * 
 * Author:Dawtie 
 * Model class for audio message
 *  
 */
//  module.exports = (sequelize, Sequelize) => {
// 	const Audio = sequelize.define('audio', {
//       audioFile: {
//         type: Sequelize.BLOB,
//         field:'audio_file'
//       },
//       time: {
//         type: Sequelize.DATE, 
//          defaultValue: Sequelize.NOW
//       }
    
// 	});
	
// 	return Audio;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Audio.init({
    audioFile: {
      type: DataTypes.BLOB,
      field:'audio_file'
    },
    time: {
      type: DataTypes.DATE, 
       defaultValue: DataTypes.NOW
    }

  }, {
    sequelize,
    modelName: 'audio',
  });
  Audio.associate = (models) => {
    Audio.belongsTo(models.login,{foreignKey: 'sent', targetKey: 'loginid'});
    Audio.belongsTo(models.login,{foreignKey: 'receive', targetKey: 'loginid'});

  }
  return Audio;
};