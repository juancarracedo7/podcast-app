const { Sequelize } = require("sequelize/types");
const db = require("../database/index")

const Podcast = db.define("podcast", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
}
);

module.exports = Podcast;