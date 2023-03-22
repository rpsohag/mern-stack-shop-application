import express from "express";
import { createProductTag, getAllProductTags } from "../../controllers/product/tag.js";

// create router
const router = express.Router();

// routes
router.route('/tag').get(getAllProductTags);
router.route('/tag/create').post(createProductTag)


export default router;