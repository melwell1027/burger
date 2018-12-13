const express = require("express");

const router = express.Router();

const burger = require("../models/burger")

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

router.post("/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            res.redirect('/');
        });
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (result) {
        res.redirect('/');
    })
})

module.exports = router;