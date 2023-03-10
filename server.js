const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const info = require('./routes/info')

const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose.connect(db)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err))

app.use('/api/info', info)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on ${port}`))