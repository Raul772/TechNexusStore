const prisma = require("../lib/prisma");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const uuid = require('uuid');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 12345;

async function signin(req, res, next) {

  const { email, password } = req.body;

  let user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    
  if (!user) {
    return res.status(400).json({message: "Invalid credentials"});
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ user }, JWT_SECRET_KEY, { expiresIn: '1 day' });

  const response = {
    jwtToken: token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      emailVerified: user.emailVerified,
      image: user.image
    }
  }


  res.json(response)
  
}

async function signup(req, res, next){

  const user = req.body;
  
 
  const userExists = prisma.user.findFirst({
    where:{
      email: user.email
    }
  });

  if (userExists) {
    return res.status(400).json({ message: 'Email already in use' });
  }


  const hashedPassword = await bcrypt.hash(password, 10);

  // Armazenar o usuário
  const newUser = { 
    id: uuid.v4(),
    email: user.email, 
    name: user.name,
    password: hashedPassword,
    image: user.image
  };

  prisma.user.create(newUser);

  res.status(201).json({ message: 'User successfully registered' });
}

async function csrf(req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (err) {
    console.error(`Error while creating new user:`, err.message);
    next(err);
  }
}




module.exports = {
  signin,
  signup,
  csrf
};
