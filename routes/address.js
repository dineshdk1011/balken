var express = require('express');
var router = express.Router();
const addressController = require('../controllers/address.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', addressController.create)
router.put('/update', addressController.update)
router.get('/viewall', addressController.viewall)
router.post('/destroy', addressController.destroy)

module.exports = router;
