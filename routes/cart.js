var express = require("express");
var router = express.Router();
const cartController = require("../controllers/cart.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", cartController.create);
router.post("/update", cartController.update);
router.post("/view", cartController.view);
router.get("/viewall", cartController.viewall);
router.post("/destroy", cartController.destroy);

module.exports = router;
