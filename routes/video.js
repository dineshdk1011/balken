var express = require('express');
var router = express.Router();
const videoController = require('../controllers/video.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', videoController.create)
router.put('/update', videoController.update)
router.get('/viewall', videoController.viewall)
router.post('/destroy', videoController.destroy)

module.exports = router;
