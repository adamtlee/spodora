'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [{
      title: 'If I ain\'t got you',
      artist: 'Alicia Keys',
      album: 'The Diary of Alicia Keys',
      album: 'R&B',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
