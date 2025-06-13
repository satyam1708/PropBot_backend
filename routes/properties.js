const express = require('express');
const router = express.Router();
const properties = require('../data/properties.json');

router.get('/properties', (req, res) => {
  res.json(properties);
});

module.exports = router;
