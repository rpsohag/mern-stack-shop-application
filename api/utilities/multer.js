import multer from 'multer';


//create diskstorage
const storage = multer.diskStorage({
    filename : (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
    destination : (req, file , cb) => {
        cb(null, "api/public/product/category")
    }
});

// product category middleware
export const productCategoryMulter = multer({storage}).single("photo");