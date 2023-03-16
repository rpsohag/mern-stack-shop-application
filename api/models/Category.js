import mongoose from 'mongoose';


// schema
const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true,
    },
    slug : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    photo : {
        type : String,
        default : null,
        trim : true
    },
    status : {
        type : Boolean,
        default : true,
    },
    trash : {
        type : Boolean,
        default : false
    }
    
},{
    timestamps : true
})
// export model
export default mongoose.model("Category", categorySchema);