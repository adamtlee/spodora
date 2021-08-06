require('dotenv').config
const { Sequelize } = require('sequelize');

// Temporarily hardcoded values which is bad practice, in actual practice I'll replace the parameters with .env variables/
const sequelize = new Sequelize( 'spodora', 'admin', 'password', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
  });

  sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.'); 
    sequelize.close();
    })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
    sequelize.close();
});
  




   

