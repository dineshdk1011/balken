var express = require('express');
var router = express.Router();
const enquiryController = require('../controllers/enquiry.controller')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', enquiryController.create)
router.put('/update', enquiryController.update)
router.post('/view', enquiryController.view)
router.get('/viewall', enquiryController.viewall)
router.post('/destroy', enquiryController.destroy)
router.post('/mail', enquiryController.mail)

module.exports = router;
