'use stric'
const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.sendFile(path.resolver(__dirname, 'Taller-coches'))
})


app.listen(3000)