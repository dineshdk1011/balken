var express = require('express');
var router = express.Router();
const galleryController = require('../controllers/gallery.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', galleryController.create)
router.put('/update', galleryController.update)
router.get('/viewall', galleryController.viewall)
router.post('/destroy', galleryController.destroy)

module.exports = router;
