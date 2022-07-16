var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employee.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', employeeController.create)
router.put('/update', employeeController.update)
router.get('/viewall', employeeController.viewall)
router.post('/destroy', employeeController.destroy)

module.exports = router;
