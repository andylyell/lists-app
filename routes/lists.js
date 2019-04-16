const express = require('express');
const router = express.Router();
const listController = require('../controller/listController');

router.get('/', listController.getLists);

router.get('/:id', listController.getList);

router.post('/', listController.createList);

router.put('/:id', listController.updateList);

router.delete('/:id', listController.deleteList);


module.exports = router;