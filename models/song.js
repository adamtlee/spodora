'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Song.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    album: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });

/*
***Insert a record into the DB***
  (async () => {
    await sequelize.sync(); 
    const newSong = await Song.create({
      title: "Airplanes",
      artist: "BoB",
      album: "B.o.B Presents: The Adventures of Bobby Ray",
      year: "2010",
      genre: "Pop"
    }); 
    console.log(newSong.toJSON);
  })();
  
*/  

/*
***Retrieve all records from a database***
(async () => {
  await sequelize.sync();
  const songs = await Song.findAll();
  console.log(songs.every(song => song instanceof Song));
  console.log("All users: ", JSON.stringify(songs, null, 2));
  sequelize.close();
})();
*/
  return Song;
};



