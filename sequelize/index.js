require('dotenv').config
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize( process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
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
  




   

