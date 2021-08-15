const Sequelize = require('sequelize');

const connection = new Sequelize('blog', 'YOUR USER', 'YOUR PASSWORD',{
    host: 'YOUR HOST',
    dialect: 'mysql'
})

module.exports = connection;