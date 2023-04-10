import express from "express";
import { createProducts, deleteProduct, getAllProducts, getSingleProduct } from "../../controllers/product/product.js";
import { productMulter } from "../../utilities/multer.js";
const router = express.Router();



router.route('/').get(getAllProducts)
router.route('/').post(productMulter, createProducts)
router.route('/:slug').get(getSingleProduct);
router.route('/:slug').delete(deleteProduct);


export default router;