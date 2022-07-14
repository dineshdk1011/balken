var express = require('express');
var router = express.Router();
const foodcardController = require('../controllers/foodcard.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', foodcardController.create)
router.post('/update', foodcardController.update)
router.get('/viewall', foodcardController.viewall)
router.post('/destroy', foodcardController.destroy)

module.exports = router;
