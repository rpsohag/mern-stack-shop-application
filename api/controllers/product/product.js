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
    
        const { name, regular_price, sale_price, stock, short_desc, long_desc, categories, tags, brands} = req.body;
        const photo = req.files["product-thumbnail"][0].filename;
        const gallery = [];
        req.files["product-galleries"].forEach((item) => {
            gallery.push(item.filename);
        });
        const data = await Product.create({
            name,
            slug : createSlug(name),
            regular_price,
            sale_price,
            stock, 
            short_desc,
            long_desc, 
            categories,
            tags, 
            brands,
            photo,
            gallery
        });
        res.status(200).json({
            products : data,
            message : "Create Product",
        })
  
}
export const getSingleProduct = async (req, res, next) => {
    
        const { slug } = req.params;

        const data = await Product.findOne({slug});
        res.status(200).json({
            products : data,
            message : "Create Product",
        })
  
}

export const updateProduct = async (req, res, next) => {
    
        const { id } = req.params;
        const { name, regular_price, sale_price, stock, short_desc, long_desc, categories, tags, brands} = req.body;
        const data = await Product.findByIdAndUpdate(id,{
            name,
            slug : createSlug(name),
            regular_price,
            sale_price,
            stock, 
            short_desc,
            long_desc, 
            categories,
            tags, 
            brands,
        },{ new : true});

        let photo = '';

        if(req.files['product-thumbnail']){
            photo = req.files['product-thumbnail'][0].filename;
            unlinkSync(`api/public/products/${data.photo}`)
        }else{
            photo = data.photo
        }
        
        data.gallery.forEach((item) => {
            unlinkSync(`api/public/products/${item}`)
        })

        res.status(200).json({
            products : data,
            message : "Create Product",
        })
  
}
export const deleteProduct = async (req, res, next) => {
    
        const { id } = req.params;
        const data = await Product.findByIdAndDelete(id);
        unlinkSync(`api/public/products/${data.photo}`)
        
        data.gallery.forEach((item) => {
            unlinkSync(`api/public/products/${item}`)
        })

        res.status(200).json({
            products : data,
            message : "Create Product",
        })
  
}