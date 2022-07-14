var express = require("express");
var router = express.Router();
const tagsController = require("../controllers/tags.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", tagsController.create);
router.post("/update", tagsController.update);
router.get("/viewall", tagsController.viewall);
router.post("/destroy", tagsController.destroy);

module.exports = router;
