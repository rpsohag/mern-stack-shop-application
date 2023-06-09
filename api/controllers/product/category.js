import { createSlug } from "../../helper/slugCreate.js";
import { errorHandle } from "../../middlewares/errorHandler.js";
import Category from "../../models/Category.js"
import { createError } from "../../utilities/createError.js";

export const getAllCategory = async (req,res,next) => {
    try {
        const data = await Category.find();
        res.status(200).json({
            categories : data,
            message : "successfully get all data"
        })
    } catch (error) {
        // next(error)
        next(createError("data can not save",400))
    }
}

export const createProductCategory = async (req, res) => {
    try {
        const { name, slug} = req.body;
        const data = await Category.create({
            name,
            slug : createSlug(name),
            photo : req.file.filename
        })
        res.status(200).json({
            category : data,
            message : "Category created successfully!"
        })
    } catch (error) {
        console.log(error.message)
    }
}
export const viewProductCategory = async (req, res) => {
    try {
        const { slug} = req.params;
        const data = await Category.findOne({slug})
        res.status(200).json({
            category : data
        })
    } catch (error) {
        console.log(error.message)
    }
}
export const deleteProductCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Category.findByIdAndDelete(id)
        res.status(200).json({
            message : "category deleted successfully"
        })
    } catch (error) {
        console.log(error.message)
    }
}
export const updateProductCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug } = req.body;
        const data = await Category.findByIdAndUpdate(id, {name, slug},{ new : true})
        res.status(200).json({
            category : data,
            message : "category updated successfully"
        })
    } catch (error) {
        console.log(error.message)
    }
}