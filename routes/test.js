var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async function (req, res) {
  let url = req.param('url');

  let response = await axios.get(`https://${url}`);
  res.json(response.data);
});

module.exports = router;