require('dotenv').config({
  path: '.env',
}) // this has to be top of the file
const express = require('express')
const mail = require('./mail')
const { DOMAIN, LOCALHOST, PORT } = require('./constants')

const app = express()
const corsOrigin = process.env.NODE_ENV === 'development' ? LOCALHOST : DOMAIN

app.use(express.json({ limit: '8kb' }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', corsOrigin)
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

app.listen(PORT, () => {
  console.log(`[server] Listening on port ⚡⚡⚡ ${PORT} ⚡⚡⚡`)
})
