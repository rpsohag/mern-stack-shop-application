import express from "express";
import { createProductBrand, deleteProductBrand, getAllProductBrands, singleProductBrand, updateProductBrand } from "../../controllers/product/brand.js";
import { productBrandMulter } from "../../utilities/multer.js";
const router = express.Router();




router.get('/brand', getAllProductBrands);
router.post('/brand/create', productBrandMulter , createProductBrand);
router.get('/brand/:slug', singleProductBrand);
router.delete('/brand/:id', deleteProductBrand);
router.put('/brand/update/:id', updateProductBrand);

export default router;