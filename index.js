const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req.body)
})

app.listen(3000, () => console.log('Server is running on 3000 port.'))