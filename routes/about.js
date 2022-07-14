var express = require('express');
var router = express.Router();
const aboutController = require('../controllers/about.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', aboutController.create)
router.post('/update', aboutController.update)
router.get('/viewall', aboutController.viewall)
router.post('/destroy', aboutController.destroy)

module.exports = router;
