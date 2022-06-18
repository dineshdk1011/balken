var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menu.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', menuController.create)
router.put('/update', menuController.update)
router.post('/view', menuController.view)
router.get('/viewall', menuController.viewall)
router.post('/destroy', menuController.destroy)

module.exports = router;
