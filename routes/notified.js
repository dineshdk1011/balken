var express = require('express');
var router = express.Router();
const notifiedController = require('../controllers/notified.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', notifiedController.create)
router.post('/update', notifiedController.update)
router.get('/viewall', notifiedController.viewall)
router.post('/destroy', notifiedController.destroy)

module.exports = router;
