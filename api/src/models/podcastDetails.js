const { DataTypes } = require('sequelize');
const db = require('../database/index');

const PodcastDetail = db.define('PodcastDetail', {
  trackId: {
    type: DataTypes.BIGINT,
  },
  trackName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  trackTimeMillis: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  previewUrl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  episodeUrl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image : {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = PodcastDetail;
