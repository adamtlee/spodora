'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {
        title: 'If I ain\'t got you',
        artist: 'Alicia Keys',
        album: 'The Diary of Alicia Keys',
        genre: 'R&B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Wake me up',
        artist: 'Aloe Blacc',
        album: 'Wake me up EP',
        genre: 'soul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'If I ain\'t got you',
        artist: 'Alicia Keys',
        album: 'The Diary of Alicia Keys',
        genre: 'R&B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Eye of a tiger',
        artist: 'Survivor',
        album: 'Eye of a Tiger',
        genre: 'Rock',
        createdAt: new Date(),
        updatedAt: new Date()
      } 
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
