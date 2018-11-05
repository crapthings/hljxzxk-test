const fs = require('fs')
const get = require('lodash/get')
const express = require('express')

const db = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }))

const app = express()

app.get('/', function (req, res) {
  const { code } = req.query
  const result = get(db, code)
  if (!result) return res.sendStatus(500)
  res.send(result)
})

app.listen(8910, () => {
  console.log('port 8910')
})
