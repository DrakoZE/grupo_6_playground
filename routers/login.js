const express = require("express");
const router = express.Router();
const controller = require("../controllers/loginController");

router.get("/login", controller.getLoginPage);

router.post("/login", controller.loginUser);

module.exports = router