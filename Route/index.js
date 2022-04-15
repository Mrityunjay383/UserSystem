const express = require("express");
const router = express.Router();

const { isLogedIn } = require('../Middleware/auth.js');

router.get("/", isLogedIn, (req, res) => {

  res.render("index", {isLogedIn: req.isLogedIn});
});

module.exports = router
