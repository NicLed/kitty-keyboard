const express = require('express');
const app = express();
const { getMeows } = require('../database/');

app.use(express.json());

app.get('/meows', (req, res) => {
  getMeows()
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.error('HIIII');
      res.status(404).send('Hello from the server')
    });
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});