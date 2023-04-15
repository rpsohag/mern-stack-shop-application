// get all product tags

import { createSlug } from "../../helper/slugCreate.js";
import Tag from "../../models/Tag.js"

export const getAllProductTags = async(req,res,next) => {
    try {
        const data = await Tag.find();
        res.status(200).json({
            tags : data,
            message : "Succcessuflly get all tags"
        })
    } catch (error) {
        next(error);
    }
}
// new changes here

export const createProductTag = async(req,res,next) => {
    try {
        const {name } = req.body;
        const data = await Tag.create({
            name, slug : createSlug(name)
        });
        res.status(200).json({
            tags : data,
            message : "Tag created successfully"
        })
    } catch (error) {
        next(error);
    }
}


export const singleProductTag = async(req,res,next) => {
    try {
        const { id } = req.params;
        const data = await Tag.findById(id);
        res.status(200).json({
            tag : data,
            message : "Single Tag"
        })
    } catch (error) {
        next(error);
    }
}

export const deleteProductTag = async(req,res,next) => {
    try {
        const { id } = req.params;
        const data = await Tag.findByIdAndDelete(id);
        res.status(200).json({
            tag : data,
            message : "Tag deleted successfully"
        })
    } catch (error) {
        next(error);
    }
}
export const updateProductTag = async(req,res,next) => {
    try {
        const { name, slug } = req.body;
        const { id } = req.params;
        const data = await Tag.findByIdAndUpdate(id,{
            name, slug
        }, { new : true});
        res.status(200).json({
            tag : data,
            message : "Tag Updated successfully"
        })
    } catch (error) {
        next(error);
    }
}