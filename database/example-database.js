const Sequelize = require('sequelize');

const connection = new Sequelize('blog', 'YOUR USER', 'YOUR PASSWORD',{
    host: 'YOUR HOST',
    dialect: 'mysql',
    timezone: 'YOUR TIME ZONE'
})

module.exports = connection;