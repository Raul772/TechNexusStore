const express = require("express");

const productsController = require("../controllers/products.controller");

const productsRouter = express.Router();

/* GET Products */
productsRouter.get("/", productsController.getProducts);

/* GET Deals */
productsRouter.get("/deals", productsController.getDeals);

/* GET Categories */
productsRouter.get("/categories", productsController.getCategories);

/* GET Related Products */
productsRouter.get("/related/:categoryId/:slug", productsController.getRelated);

/* GET Products by Category */
productsRouter.get("/categories/:slug", productsController.getProductByCategory);

/* GET Product */
productsRouter.get("/:slug", productsController.getProduct);


module.exports = productsRouter;
