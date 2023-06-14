const { Router } = require('express');
const {  getPodcast, getPodcastDetails } = require('../controllers/index.controllers');
const router = Router();

router.get('/podcast', getPodcast);

router.get('/details/:id', getPodcastDetails);



module.exports = router;