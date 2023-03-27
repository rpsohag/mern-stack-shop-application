import express from "express";
import { createProductTag, deleteProductTag, getAllProductTags, singleProductTag, updateProductTag } from "../../controllers/product/tag.js";

// create router
const router = express.Router();

// routes
router.route('/tag').get(getAllProductTags);
router.route('/tag/create').post(createProductTag)
router.route('/tag/:id').get(singleProductTag)
router.route('/tag/:id').delete(deleteProductTag)
router.route('/tag/:id').put(updateProductTag)


export default router;