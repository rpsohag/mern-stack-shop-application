import express from 'express';
import { getAllCategory } from '../../controllers/product/category.js';

// create router
const  router = express.Router();

router.get('/category',getAllCategory)


export default router;