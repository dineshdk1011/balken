var express = require('express');
var router = express.Router();
const todaysplController = require('../controllers/todayspl.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', todaysplController.create)
router.post('/update', todaysplController.update)
router.get('/viewall', todaysplController.viewall)
router.post('/destroy', todaysplController.destroy)

module.exports = router;
