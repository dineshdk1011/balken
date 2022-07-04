var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin.controller')



/* GET admins listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', adminController.create)
router.post('/update', adminController.update)
router.post('/view', adminController.view)
router.get('/viewall', adminController.viewall)
router.delete('/destroy', adminController.destroy)
router.post('/login', adminController.login)
router.post('/jwtvalidation', adminController.jwtvalidation)
router.post('/passwordchange', adminController.passwordchange)



module.exports = router;
