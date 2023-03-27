import { createSlug } from "../../helper/slugCreate.js";
import Product from "../../models/Product.js"


// get all products


export const getAllProducts = async (req, res, next) => {
    try {
        const data = await Product.find();
        res.status(200).json({
            products : data,
            message : "List of all products"
        })
    } catch (error) {
        next(error)
    }
}
export const createProducts = async (req, res, next) => {
    try {
        const { name, reqular_price, sale_price, short_desc, long_desc} = req.body;
        console.log(createSlug(name));
        // const data = await Product.find();
        // res.status(200).json({
        //     products : data,
        //     message : "List of all products"
        // })
    } catch (error) {
        next(error)
    }
}