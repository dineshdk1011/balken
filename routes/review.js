var express = require('express');
var router = express.Router();
const reviewController = require('../controllers/review.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', reviewController.create)
router.put('/update', reviewController.update)
router.get('/viewall', reviewController.viewall)
router.post('/destroy', reviewController.destroy)

module.exports = router;
