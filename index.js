const fs = require('fs')
const get = require('lodash/get')
const map = require('lodash/map')
const express = require('express')
const ip = require('ip')

let ipaddr = ip.address()

const db = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }))

const app = express()

app.get('/', function (req, res) {
  const { code } = req.query
  const result = get(db, code)
  if (!result) return res.sendStatus(500)
  res.send(result)
})

app.get('/list', function (req, res) {
  const result = map(db, (v, k) => ({
    职权名称: v['职权名称'],
    连接: `http://${ipaddr}:8910/?code=${k}`,
  }))
  res.send(result)
})

app.listen(8910, () => {
  console.log('port 8910')
})
