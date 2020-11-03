const app = require('.')
const PORT = 1337
const {db} = require('./db')

const init = async () => {
  try {
    db.sync()
    console.log('db synced')
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
  }
  catch(error){
    console.error('Error starting server:', error)
  }
}
init(); // invoking to the function