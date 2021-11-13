'use strict';

const express = require('express')
const app = express()
const port = 3000

const basePath = '/api/v1'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(basePath)