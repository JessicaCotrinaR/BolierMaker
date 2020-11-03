const express = require('express')
const path = require('path')
const session = requiere("express-session")
const passport = require("passport")
const app = express()


const morgan = require('morgan');
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Session middleware
app.use(session({
  // called SESSION_SECRET exists, we use that as our secret instead of the insecure secret.
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  resave: false,
  saveUninitialized: false
}))

//oauth
app.use(passport.initialize())
app.use(passport.session())

app.use('/api', require('./api')) // include our routes!

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  }) // Send index.html for any other requests

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

// error handling middleware
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app