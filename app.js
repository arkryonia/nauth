const express    = require('express')
const morgan     = require('morgan')
const bodyParser = require('body-parser')
const dotenv     = require('dotenv')
const mongoose   = require('mongoose')

const { mongo } = require('./config/mongodb')

// Initializing express and others stuffs
dotenv.config()
mongo.connect(mongoose)
const app = express()
const PORT = process.env.PORT || 3333

// Middlewares ...
app.use(morgan('dev'))
app.use(bodyParser.json())


// Routes
app.use('/users', require('./routes/users'))

// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})
