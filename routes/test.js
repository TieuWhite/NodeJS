const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("empty");
});
router.get("/one", function (req, res, next) {
  res.send("/one");
});

router.get("/two", function (req, res, next) {
  res.send("/two");
});

router.get("/three", function (req, res, next) {
  res.send("/three");
});

module.exports = router;
