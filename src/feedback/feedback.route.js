const express = require('express');
const { postFeedback } = require('./feedback.controller');
const router = express.Router();

router.post("/", postFeedback);

module.exports = router;
