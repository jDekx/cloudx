require('dotenv').config()
const express = require('express');
const app = express();
const UUID = require('uuid');

app.use(express.urlencoded({extended: true}))

const products = [];

app.get('/product/2', (req, res) => {
  console.log("Sending: " + JSON.stringify(products));
  res.json(products);
});

app.put('/product/2/add', (req, res) => {
  const name = req.query.name;
  const id = UUID.v4();
  const product = {id, name};
  console.log("Created new product: " + JSON.stringify(product));
  products.push(product);
  res.json(id);
});

app.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT}!`),);