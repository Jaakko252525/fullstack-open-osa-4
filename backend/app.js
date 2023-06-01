const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
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


// get request
app.use('/', blogsRouter);


//const PORT = config.PORT
//app.listen(PORT, () => {
//  console.log(`Server running on port ${PORT}`)
//})


module.exports = {
  app
}

