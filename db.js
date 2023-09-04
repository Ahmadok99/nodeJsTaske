const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task10', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres',
});


module.exports = sequelize;