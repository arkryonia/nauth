const express    = require('express')
const morgan     = require('morgan')
const bodyParser = require('body-parser')
const dotenv     = require('dotenv')

// Initializing express and others stuffs
dotenv.config()
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
