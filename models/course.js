module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define('course', {
        name: {
            type: Sequelize.STRING
        },
        total_hour: {
            type: Sequelize.FLOAT
        }
    });

    return Course;
}