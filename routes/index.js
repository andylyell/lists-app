const express = require('express');
const router = express.Router();
const buildController = require('../controller/buildController');

//Get the home page
router.get('/', (req, res, next) => {
    res.send('Initial page - needs to be redirected');
});

router.get('/build', buildController.buildSeed);

router.delete('/destroy', buildController.destroyCollections, );

module.exports = router;