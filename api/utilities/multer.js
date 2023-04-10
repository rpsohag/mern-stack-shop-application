import multer from 'multer';


//create diskstorage
const storage = multer.diskStorage({
    filename : (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
    destination : (req, file , cb) => {
        if(file.fieldname == "category-photo"){
            cb(null, "api/public/uploads/categories")
        }
        if(file.fieldname == "brand-photo"){
            cb(null, "api/public/uploads/brands")
        }
        if(file.fieldname == "product-thumbnail"){
            cb(null, "api/public/uploads/product/thumbnail")
        }
        if(file.fieldname == "product-galleries"){
            cb(null, "api/public/uploads/product/galleries")
        }
    }
});

// product category middleware
export const productCategoryMulter = multer({storage}).single("category-photo");
export const productBrandMulter = multer({storage}).single("brand-photo");

export const productMulter = multer({storage}).fields([
    {
        name : "product-thumbnail",
        maxCount : 1
    },
    {
        name : "product-galleries",
        maxCount : 10
    }
]);