var express = require('express');
var router = express.Router();
const notificationController = require('../controllers/notification.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', notificationController.create)
router.put('/update', notificationController.update)
router.get('/viewall', notificationController.viewall)
router.post('/destroy', notificationController.destroy)

module.exports = router;
