'use strict';
var hstore = require('pg-hstore')();
const {
  Model, Sequelize, QueryTypes
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
    genre: DataTypes.STRING,
    data: Sequelize.HSTORE(),
  }, {
    sequelize,
    modelName: 'Song',
  });
const Op = Sequelize.Op;
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

/*
***SELECT * FROM song WHERE id = 2 AND artist = 'Alicia Keys' ***
(async () => {
  await sequelize.sync();
  const find_song_by_id = await Song.findAll({
    where: {
      id: 2,
      artist: 'Alicia Keys'
    }
  });
  console.log(JSON.stringify(find_song_by_id));
  sequelize.close();
})();
*/ 

/** in Progress delete 
(async () => {
  await sequelize.sync();
  const delete_song_by_id = await Song.findAll({
    where: {
      id: 2
    }
  });
  console.log(JSON.stringify(delete_song_by_id));
  sequelize.close();
})();
*/ 

/*
(async () => {
  await sequelize.sync(); 
  const newSong = await Song.create({
    title: "California Love",
    artist: "Tupac Shakur",
    album: "2pac",
    year: "1996",
    genre: "Rap",
    data: { 
            likes: "2000",
            listens: "2000"
          } 

  }); 
  console.log(newSong.toJSON);
})();
*/

/*
***Raw query for hstore column***
(async () => {
  const record = await sequelize.query('SELECT * FROM "Songs" WHERE data->\'likes\' = \'2000\'',{
    type: QueryTypes.SELECT
  })
  console.log("here");
  console.log(record);  
  sequelize.close();
})();
*/
};



