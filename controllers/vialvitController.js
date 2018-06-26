var express = require("express");
var router = express.Router();
// var path = require("path")
// var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    Aluminio = {
        Aluminio: "/assets/images/Aluminio.jpg"
    }
    res.render("index",Aluminio);
});
module.exports = router;