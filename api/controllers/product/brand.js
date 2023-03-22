import Brand from "../../models/Brand.js";




export const getAllProductBrands = async (req, res, next) => {
    try {
        const brands = await Brand.find();
        res.status(200).json({
            data : brands,
            message : "successfully get all brands"
        })
    } catch (error) {
        next(error);
    }
}

export const createProductBrand = async (req, res, next) => {
    try {
        const { name, slug} = req.body;
        const data = await Brand.create({
            name,
            slug,
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
        const { name, slug } = req.body;
        const data = await Brand.findByIdAndUpdate(id, {name, slug},{ new : true})
        res.status(200).json({
            brand : data,
            message : "brand updated successfully"
        })
    } catch (error) {
        next(error)
    }
}