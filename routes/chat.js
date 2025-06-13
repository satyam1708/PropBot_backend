const express = require('express');
const router = express.Router();
const chatWithFunction = require('../functions/openai');
const logToFile = require('../utils/logger');

router.post('/', async (req, res) => {
  const { message } = req.body;
  try {
    const reply = await chatWithFunction(message);
    logToFile({ timestamp: new Date(), query: message, response: reply });
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
