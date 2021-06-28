var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async function (req, res) {
  let url = req.query.url;

  let response = await axios.get(`https://${url}`);
  res.json(response.data);
});

router.put('/', async function (req, res) {
  let url = req.query.url;

  let response = await axios.put(`https://${url}`, req.body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  res.json(response.data);
});

module.exports = router;