import express from "express";
import { createProducts, getAllProducts } from "../../controllers/product/product.js";
const router = express.Router();



router.route('/').get(getAllProducts)
router.route('/').post(createProducts)


export default router;