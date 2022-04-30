import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => { console.log('Connected to DataBase') })
  .catch(err => {
    console.log(err.message)
  });


const app = express();

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})