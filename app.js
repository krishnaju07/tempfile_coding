const express = require("express")
const app = express()

const routes = require('./src/router');

app.use(routes);

module.exports = app