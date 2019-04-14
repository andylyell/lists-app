const express = require('express');
const router = express.Router();

//Get the home page
router.get('/', (req, res, next) => {
    res.send('Initial page - needs to be redirected');
});

module.exports = router;