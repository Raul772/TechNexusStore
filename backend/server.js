const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRouter = require('./src/routes/user.route');
const authRouter = require('./src/routes/auth.route');
const cors = require('cors');
const productsRouter = require('./src/routes/products.route');

dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.get('/api', (req, res) => {
  res.status(200).send({'message':'ok'});
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);


app.listen(port, () => {
  console.info(`[TechNexus-Backend]: Server Running at http://localhost:${port}`);
});