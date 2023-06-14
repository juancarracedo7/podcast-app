const {  DataTypes } = require('sequelize');
const db = require('../database/index');

const Podcast = db.define('Podcast', {
  name: {
    type: DataTypes.TEXT,
  },
  image : {
    type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    price : {
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.TEXT,
    },
    link : {
        type: DataTypes.STRING,
    },
    artist : {
        type: DataTypes.STRING,
    },
    category : {
        type: DataTypes.STRING,
    },
    releaseDate : {
        type: DataTypes.STRING,
    },

});

module.exports = Podcast;
