//ARSHEENA guardian registration
module.exports = (sequelize, Sequelize) => {
    const Guardian = sequelize.define('guardian', {
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'last_name'
        },
        mobile: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        }
    });

    return Guardian;
}