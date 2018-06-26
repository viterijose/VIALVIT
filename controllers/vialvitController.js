var express = require("express");
var router = express.Router();
var path = require("path")
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
});
module.exports = router;