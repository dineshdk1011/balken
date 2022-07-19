var express = require("express");
var router = express.Router();
const teamController = require("../controllers/teams.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", teamController.create);
router.post("/update", teamController.update);
router.get("/viewall", teamController.viewall);
router.post("/destroy", teamController.destroy);

module.exports = router;
