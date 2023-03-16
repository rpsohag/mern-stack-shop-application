import express from 'express';
import { createProductCategory, deleteProductCategory, getAllCategory, updateProductCategory, viewProductCategory } from '../../controllers/product/category.js';
import { productCategoryMulter } from '../../utilities/multer.js';

// create router
const  router = express.Router();

router.get('/category',getAllCategory)
router.post('/category/create', productCategoryMulter, createProductCategory)
router.get('/category/:slug', viewProductCategory)
router.delete('/category/:id', deleteProductCategory)
router.put('/category/:id', updateProductCategory)


export default router;