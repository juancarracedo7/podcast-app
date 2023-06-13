const { Router } = require('express');
const {  getPodcast } = require('../controllers/index.controllers');
const router = Router();

router.get('/', getPodcast);


module.exports = router;