'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.albums.hasMany(models.song)
    }
  };
  album.init({
    artist: DataTypes.TEXT,
    title: DataTypes.TEXT,
    numberOfTracks: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'album',
  });
  return album;
};