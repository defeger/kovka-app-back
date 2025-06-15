const express = require('express');
const { postAItem, getAllItems } = require('./item.controller');
const { postOrder } = require('../orders/order.controller');
const router = express.Router();

//post a book
//post = когда submit что-то с фронта на ДБ
//get = когда бек получает что-то с ДБ
//put/patch = когда нужно изменить или обновить

// front -> back serv -> controller -> book schema -> database -> send to serv -> back to front

router.post("/create-item", postAItem);

router.get("/", getAllItems);

router.post("/order", postOrder);

module.exports = router;


