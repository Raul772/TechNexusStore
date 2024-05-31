const express = require("express");

const productsController = require("../controllers/products.controller");

const productsRouter = express.Router();

/* GET Products */
productsRouter.get("/", productsController.getProducts);

/* GET Deals */
productsRouter.get("/deals", productsController.getDeals);

/* GET Categories */
productsRouter.get("/categories", productsController.getCategories);


productsRouter.get("/categories/:slug", productsController.getProductByCategory);

/* GET Product */
productsRouter.get("/:slug", productsController.getProduct);

module.exports = productsRouter;
