import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find(x => x.slug === req.params.slug);
  if (product) {
    res.send(product)
  } else {
    res.send(404).send({ message: 'Product Not Found' });
  }
  res.send(data.products);
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})