const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes')
const port = 3500
const bodyParser = require('body-parser')

const app = express()
mongoose.connect('mongodb://127.0.0.1/bursaku_api')

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log(`Database Connected`))

app.use(cors())
app.use(bodyParser.json())
//www-url-form-encoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', router)



app.get("/", (req, res) => res.send("service is running"))
app.listen(port, () => {
  console.log(`Bursaku Backend listening on port ${port}`)
})

