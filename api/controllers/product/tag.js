// get all product tags

import Tag from "../../models/Tag.js"

export const getAllProductTags = async(req,res,next) => {
    try {
        const data = await Tag.find();
        res.status(200).json({
            tag : data,
            message : "Succcessuflly get all tags"
        })
    } catch (error) {
        next(error);
    }
}


export const createProductTag = async(req,res,next) => {
    try {
        const {name, slug } = req.body;
        const data = await Tag.create({
            name, slug
        });
        res.status(200).json({
            tag : data,
            message : "Tag created successfully"
        })
    } catch (error) {
        next(error);
    }
}