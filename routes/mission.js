var express = require("express");
var router = express.Router();
const missionController = require("../controllers/mission.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", missionController.create);
router.post("/update", missionController.update);
router.get("/viewall", missionController.viewall);
router.post("/destroy", missionController.destroy);

module.exports = router;
