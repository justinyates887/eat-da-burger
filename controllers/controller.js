const express = require("express");
const burger = require("../models/burger-mod.js");
const router = express.Router();

router.get("/", function(req, res) {
	burger.burgMod.all(function(data) {
		let hasObject = {burgers: data};
		res.render("index", hasObject);
	});
});

router.post("/", function(req, res) {
	burger.burgMod.create(["burger_name"], [req.body.name], function(data) {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	let condition = "id = " + req.params.id;
	console.log("condition", condition);
	burger.burgMod.update({ devoured: req.body.devoured}, condition, function() {
		res.redirect("/");
	});
});

module.exports = router;