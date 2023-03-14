import express from 'express';
import dotenv from 'dotenv';

// init express 
const app = express();
dotenv.config();


// environment variable
const PORT = process.env.PORT || 9090;

// listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})