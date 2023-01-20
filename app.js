/* eslint-disable no-console */
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

console.log('process.env.FLY_TOKEN', process.env.FLY_API_TOKEN);

app.use(express.static('dist'));

app.get('/health', (req, res) => {
  res.send('ok');
});

app.get('/version', (req, res) => {
  // https://community.fly.io/t/supply-build-version-via-env-variable/1667/5
  axios
    .post(
      'https://api.fly.io/graphql',
      {
        query: `query {
        app(name: "alen-pokedex") {
          currentRelease {
            version
            status
          }
        }
      }`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.FLY_API_TOKEN}`,
        },
      }
    )
    .then((response) => {
      res.json(response.data.data.app.currentRelease.version);
    })
    .catch((e) => res.json(e));
});

app.listen(PORT, () => {
  console.log('server started on port 8080');
});
