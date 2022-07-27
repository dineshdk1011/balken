var express = require("express");
var router = express.Router();
const SocialMediaController = require("../controllers/socialMedia.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", SocialMediaController.create);
router.post("/update", SocialMediaController.update);
router.get("/viewall", SocialMediaController.viewall);
router.post("/destroy", SocialMediaController.destroy);

module.exports = router;
