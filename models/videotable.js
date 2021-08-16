//Jagan Video record

// module.exports = (sequelize, Sequelize) => {
// 	const VideoTable = sequelize.define('videotable', {
    
//     video: {
//       type: Sequelize.STRING
//     },
	
// 	});
	
// 	return VideoTable;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VideoTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  };
  VideoTable.init({
    video: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'videotable',
  });
  VideoTable.associate = (models) => {
    VideoTable.belongsTo(models.teacher);
    VideoTable.belongsTo(models.course);
    VideoTable.belongsTo(models.class);  }
  return VideoTable;
};