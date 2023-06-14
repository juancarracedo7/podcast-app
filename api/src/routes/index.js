const { Router } = require('express');
const {  getPodcast, getPodcastDetails } = require('../controllers/index.controllers');
const router = Router();

router.get('/podcast', getPodcast);

router.get('/details/:trackId', getPodcastDetails);



module.exports = router;