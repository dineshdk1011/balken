var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/category.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', categoryController.create)
router.post('/update', categoryController.update)
router.get('/viewall', categoryController.viewall)
router.post('/destroy', categoryController.destroy)

module.exports = router;
