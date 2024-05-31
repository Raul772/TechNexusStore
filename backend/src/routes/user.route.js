const express = require("express");

const userController = require("../controllers/user.controller");

const userRouter = express.Router();

/* GET programming languages. */
userRouter.get("/", userController.get);

/* POST programming language */
userRouter.post("/", userController.create);

/* PUT programming language */
userRouter.put("/:id", userController.update);

/* DELETE programming language */
userRouter.delete("/:id", userController.remove);

module.exports = userRouter;