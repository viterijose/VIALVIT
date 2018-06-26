var express = require("express");
var router = express.Router();
// var path = require("path")
// var burger = require("../models/burger.js");

router.get("/", function (req, res) {

    res.render("home");
});
module.exports = router;