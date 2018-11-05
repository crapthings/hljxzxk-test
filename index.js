const fs = require('fs')
const express = require('express')
const app = express()

const db = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }))

app.get('/', function (req, res) {
  const { code } = req.query
  const result = db[code]
  res.send(result)
})

app.listen(8910, () => {
  console.log('port 8910')
})
