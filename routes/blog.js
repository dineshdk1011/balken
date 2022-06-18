var express = require('express');
var router = express.Router();
const blogController = require('../controllers/blog.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', blogController.create)
router.put('/update', blogController.update)
router.post('/view', blogController.view)
router.get('/viewall', blogController.viewall)
router.post('/destroy', blogController.destroy)

module.exports = router;
