const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boliermaker', {
  logging: false
})

module.exports = db

// create a file to build a 
// sequelize instance, go ahead and start defining your models.

// And when you're done, don't forget about defining your associations.