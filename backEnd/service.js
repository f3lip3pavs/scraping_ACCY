const express = require("express");
const route = require('./routes.js')

const app = express()

app.use(express.json())

app.use('/post', route)

app.listen(3001)