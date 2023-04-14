import Brand from "../../models/Brand.js";
import { createSlug } from "./../../helper/slugCreate.js"





export const getAllProductBrands = async (req, res, next) => {
    try {
        const brands = await Brand.find();
        res.status(200).json({
            brands,
            message : "successfully get all brands"
        })
    } catch (error) {
        next(error);
    }
}

export const createProductBrand = async (req, res, next) => {
    try {
        const { name} = req.body;
        const data = await Brand.create({
            name,
            slug : createSlug(name),
            photo : req.file.filename
        })
        res.status(200).json({
            brand : data,
            message : "Brand created successfully!"
        })
    } catch (error) {
        next(error)
    }
}
export const singleProductBrand = async (req, res, next) => {
    try {
        const { slug} = req.params;
        const data = await Brand.findOne({slug})
        res.status(200).json({
            brand : data
        })
    } catch (error) {
        next(error)
    }
}
export const deleteProductBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Brand.findByIdAndDelete(id)
        res.status(200).json({
            brand : data,
            message : "Brand deleted successfully!"
        })
    } catch (error) {
        next(error)
    }
}
export const updateProductBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, photo } = req.body;
        const data = await Brand.findByIdAndUpdate(id, {name, slug : createSlug(name), photo : req.file?.filename ? req.file.filename : photo},{ new : true})
        res.status(200).json({
            brand : data,
            message : "brand updated successfully"
        })
    } catch (error) {
        next(error)
    }
}
export const statusUpdate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const data = await Brand.findByIdAndUpdate(id, {status},{ new : true})
        res.status(200).json({
            brand : data,
            message : "brand status updated successfully"
        })
    } catch (error) {
        next(error)
    }
}