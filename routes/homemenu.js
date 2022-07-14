var express = require('express');
var router = express.Router();
const homemenuController = require('../controllers/homemenuController')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', homemenuController.create)
router.post('/update', homemenuController.update)
router.get('/viewall', homemenuController.viewall)
router.post('/destroy', homemenuController.destroy)

module.exports = router;
