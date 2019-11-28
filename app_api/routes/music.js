// step 7-a
const express = require('express');
const router = express.Router();

// step 7-b
const  ctrlMusic = require('../controllers/Music');


// step 7-c
router
.route('/music')
.get(ctrlMusic.getMusics)
.post(ctrlMusic.createMusic);
// step 7-d
router
.route('/music/:musicid')
.get(ctrlMusic.getSingleMusic)
.put(ctrlMusic.updateMusic)
.delete(ctrlMusic.deleteMusic);

// step 7-e
module.exports = router;