var express = require('express');
var router = express.Router();
const testimonialController = require('../controllers/testimonial.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', testimonialController.create)
router.put('/update', testimonialController.update)
router.get('/viewall', testimonialController.viewall)
router.post('/destroy', testimonialController.destroy)

module.exports = router;
