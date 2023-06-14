const {  DataTypes } = require('sequelize');
const db = require('../database/index');

const Podcast = db.define('Podcast', {
  name: {
    type: DataTypes.TEXT,
  },
  image : {
    type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
    },
    artist : {
        type: DataTypes.TEXT,
    },
    category : {
        type: DataTypes.TEXT,
    },
    releaseDate : {
        type: DataTypes.TEXT,
    },

});

module.exports = Podcast;
