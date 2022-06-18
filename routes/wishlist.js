var express = require("express");
var router = express.Router();
const wishlistController = require("../controllers/wishlist.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", wishlistController.create);
router.get("/viewall", wishlistController.viewall);
router.post("/view", wishlistController.view);
router.post("/destroy", wishlistController.destroy);

module.exports = router;
