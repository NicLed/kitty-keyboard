const express = require('express');
const app = express();
const getMeows = require('../database/');

app.use(express.json());

app.get('/meows', (req, res) => {
  getMeows(req.body)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.error('HIIII');
    });
})

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});