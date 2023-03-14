import mongoose from 'mongoose';


// create mongodb connection
const mongoDBConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connection succesfull!');
    } catch (error) {
        console.log(error.message);
        
    }
}

export default mongoDBConnect;