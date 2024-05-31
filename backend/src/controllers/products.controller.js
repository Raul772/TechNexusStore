const prisma = require("../lib/prisma");

async function getProduct(req, res, next) {
  let response = await prisma.product.findFirst({
    where: {
      slug: req.params.slug,
    },
  });

  if (!response) {
    return res
      .status(400)
      .json({ message: "Error while fetching product info." });
  }

  res.json(response);
}

async function getProductByCategory(req, res, next) {
  let response = await prisma.product.findMany({
    where: {
      category: {
        slug: req.params.slug,
      },
    },
  });

  if (!response) {
    return res
      .status(400)
      .json({ message: "Error while fetching products." });
  }

  res.json(response);
}

async function getDeals(req, res, next) {
  let response = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  if (!response) {
    return res.status(400).json({ message: "Error while fetching products." });
  }

  res.json(response);
}

async function getCategories(req, res, next) {
  let response = await prisma.category.findMany({});

  if (!response) {
    return res.status(400).json({ message: "Error while fetching products." });
  }

  res.json(response);
}

async function getProducts(req, res, next) {
  let response = await prisma.product.findMany({});

  if (!response) {
    return res.status(400).json({ message: "Error while fetching products." });
  }

  res.json(response);
}

async function getRelated(req, res, next) {
  let response = await prisma.product.findMany({
    where: {
      categoryId: req.params.categoryId,
      slug: {
        not: req.params.slug
      }
    },
  });

  if (!response) {
    return res.status(400).json({ message: "Error while fetching products." });
  }

  res.json(response);
}


module.exports = {
  getProduct,
  getProducts,
  getDeals,
  getCategories,
  getProductByCategory,
  getRelated
};
