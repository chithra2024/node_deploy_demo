const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from Express!');
});

module.exports = app;