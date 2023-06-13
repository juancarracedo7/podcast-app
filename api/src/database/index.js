const { Sequelize } = require('sequelize');

const db = new Sequelize("podcast", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres",
    port: 5432
});

module.exports = db;