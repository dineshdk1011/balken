var express = require('express');
var router = express.Router();
const countdownController = require('../controllers/countdown.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', countdownController.create)
router.post('/update', countdownController.update)
router.post('/view', countdownController.view)
router.get('/viewall', countdownController.viewall)
router.post('/destroy', countdownController.destroy)

module.exports = router;
