const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boliermaker', {
  logging: false
})

const User = db.define('users', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db,
  User
}


// create a file to build a 
// sequelize instance, go ahead and start defining your models.

// And when you're done, don't forget about defining your associations.