const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Lists Page to be implemented');
})

module.exports = router;