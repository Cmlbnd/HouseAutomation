var express = require("express");
var router = express.Router();

router.get("/light/1", function(req, res, next) {
    res.send("lightOn");
});

router.get("/light/0", function(req, res, next) {
    res.send("lightOff");
});

module.exports = router;