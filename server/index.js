require('dotenv').config({
  path: '.env',
})
const express = require('express')
const mail = require('./mail')
const app = express()

app.disable('x-powered-by')
app.use(express.static('public'))
app.use(express.json({ limit: '8kb' }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST')
    return res.status(200).json({})
  }
  next()
})

app.post('/send', mail.sendMessage)

app.listen(process.env.PORT, () => {
  console.log(`[server] Listening on port ⚡⚡⚡ ${process.env.PORT} ⚡⚡⚡`)
})
