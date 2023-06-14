
const {  DataTypes } = require('sequelize');
const db = require('../database/index');

const PodcastDetail = db.define('PodcastDetail', {
    trackName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      trackTimeMillis: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      releaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      previewUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      episodeUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  });
  
    module.exports = PodcastDetail;