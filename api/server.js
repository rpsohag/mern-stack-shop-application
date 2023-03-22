import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productCategoryRoute from './routes/product/category.js';
import productBrandRoute from './routes/product/brand.js';
import productTagRoute from './routes/product/tag.js';
import mongoDBConnect from './config/db.js';
import { errorHandle } from './middlewares/errorHandler.js';

// init express 
const app = express();
dotenv.config();

// middlwares
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(cors());

// set static directory

app.use(express.static("api/public"));


// routes
app.use("/api/v1/product",productCategoryRoute); 
app.use("/api/v1/product",productBrandRoute); 
app.use("/api/v1/product",productTagRoute); 


// environment variable
const PORT = process.env.PORT || 9090;


app.use(errorHandle)

// listen
app.listen(PORT, () => {
    mongoDBConnect();
    console.log(`Server running on port ${PORT}`);
})