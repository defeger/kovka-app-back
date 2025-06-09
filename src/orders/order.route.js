const express = require('express');
const { postOrder } = require('./order.controller');
const router = express.Router();

router.post("/", postOrder);

module.exports = router;
