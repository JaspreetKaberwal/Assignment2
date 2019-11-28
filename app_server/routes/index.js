var express = require('express');
var router = express.Router();

const ctrlAbout = require("../controller/about");
const ctrlMusic = require("../controller/music");

/* GET home page. */
// router.get('/',ctrlMusic.homelist);
router.get('/list',ctrlMusic.musiclist);

router.get('/about',ctrlAbout.about);
module.exports = router;
