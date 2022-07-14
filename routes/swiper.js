var express = require('express');
var router = express.Router();
const swiperController = require('../controllers/swiper.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', swiperController.create)
router.post('/update', swiperController.update)
router.get('/viewall', swiperController.viewall)
router.post('/destroy', swiperController.destroy)

module.exports = router;
