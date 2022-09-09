var express = require("express");
var router = express.Router();
const ThemeController = require("../controllers/theme.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", ThemeController.create);
router.post("/update", ThemeController.update);
router.get("/viewall", ThemeController.viewall);
router.post("/destroy", ThemeController.destroy);

module.exports = router;
