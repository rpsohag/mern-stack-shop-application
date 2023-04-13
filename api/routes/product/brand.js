import express from "express";
import { createProductBrand, deleteProductBrand, getAllProductBrands, singleProductBrand, updateProductBrand, statusUpdate } from "../../controllers/product/brand.js";
import { productBrandMulter } from "../../utilities/multer.js";
const router = express.Router();




router.get('/brand', getAllProductBrands);
router.post('/brand/create', productBrandMulter , createProductBrand);
router.get('/brand/:slug', singleProductBrand);
router.delete('/brand/:id', deleteProductBrand);
router.patch('/brand-status/:id', statusUpdate)
router.put('/brand/update/:id', updateProductBrand);

export default router;