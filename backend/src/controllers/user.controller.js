const prisma = require("../lib/prisma");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");

async function get(req, res, next) {
  try {
    let response = await prisma.user.findFirst({
      select: {
        id: true,
        name: true,
        email: true,
        image: true
      },
      where: {
        email: req.body.email,
      },
    });

    res.json(response);
  } catch (err) {
    console.error(`Error while getting user info:`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  
  const { name, email, image, password } = req.body;

  const newUser = {
    id: uuid.v4(),
    name,
    email,
    image: image || null,
    password: await bcrypt.hash(password, 10)
  }

  await prisma.user.create({data: newUser });

  res.json(newUser);
}

async function update(req, res, next) {
  try {
    res.json(await programmingLanguages.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await programmingLanguages.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
};
