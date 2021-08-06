//ARSHEENA school registration
module.exports = (sequelize, Sequelize) => {
    const School = sequelize.define('school', {
        name: {
            type: Sequelize.STRING,
            field: 'school_name'
        },

        regnum: {
            type: Sequelize.INTEGER,
            field: 'register_number'
        },

        email: {
            type: Sequelize.STRING
        },

        address: {
            type: Sequelize.STRING
        },

        mobile: {
            type: Sequelize.INTEGER
        },

        logo: {
            type: Sequelize.STRING
        },
        
    });

    return School;
}