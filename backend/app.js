const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')


// importing JWT module
const loginRouter = require('./controllers/login')


// importing controllers/users
const usersRouter = require('./controllers/users')


// importing config.js, database uri and port
const config = require('./utils/config')

// importing logger module
const logger = require('./utils/logger')


// accepting request from spesific url
app.use(cors({
  origin: '*'
}));

// importing REST requests
//const blogsRouter = require("./controllers/blogs")



app.use(express.json())

// Get request for all blogs
const { blogsRouter } = require('./controllers/blogs');

// JWT 
app.use('/api/login', loginRouter)

// get request
app.use('/', blogsRouter);

// users REST????
app.use('/', usersRouter)



//const PORT = config.PORT
//app.listen(PORT, () => {
//  console.log(`Server running on port ${PORT}`)
//})



module.exports = {
  app,
  appForTesting: app // Add appForTesting property to the exported object
};
