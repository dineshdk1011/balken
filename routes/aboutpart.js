var express = require('express');
var router = express.Router();
const aboutpartController = require('../controllers/aboutpart.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', aboutpartController.create)
router.post('/update', aboutpartController.update)
router.get('/viewall', aboutpartController.viewall)
router.post('/destroy', aboutpartController.destroy)

module.exports = router;
