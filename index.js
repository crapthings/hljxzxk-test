const fs = require('fs')
const micro = require('micro')

const db = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }))

const server = micro((req, res) => {
  const code = req.url.replace('/?code=', '')
  const result = db[code]
  return result
})

server.listen(8910, () => {
  console.log('port 8910')
})
