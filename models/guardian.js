//ARSHEENA guardian registration
// module.exports = (sequelize, Sequelize) => {
//     const Guardian = sequelize.define('guardian', {
//         firstName: {
//             type: Sequelize.STRING,
//             field: 'first_name'
//         },
//         lastName: {
//             type: Sequelize.STRING,
//             field: 'last_name'
//         },
//         mobile: {
//             type: Sequelize.INTEGER
//         },
//         email: {
//             type: Sequelize.STRING
//         }
//     });

//     return Guardian;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guardian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Guardian.init({
    firstName: {
            type: DataTypes.STRING,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'last_name'
        },
        mobile: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        }

  }, {
    sequelize,
    modelName: 'guardian',
  });
  Guardian.associate = (models) => {
    Guardian.belongsTo(models.login);
    Guardian.hasMany(models.studreg);
  }
  return Guardian;
};