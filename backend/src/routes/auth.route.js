const express = require("express");

const authController = require("../controllers/auth.controller");

const authRouter = express.Router();

/* POST signin. */
authRouter.post("/signin", authController.signin);

/* POST signup */
authRouter.post("/signup", authController.signup);

/* GET CSRF Token */
authRouter.get("/csrf", authController.csrf);

module.exports = authRouter;