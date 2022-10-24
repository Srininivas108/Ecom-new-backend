import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import blogRouter from './routes/blogRoute.js';
import productRouter from './routes/productRoute.js';
import categoryRouter from './routes/categoryRoute.js';
import subcategoryRouter from './routes/subcategoryRoute.js';
import ratingRouter from './routes/ratingRoute.js';
import orderRouter from './routes/orderRoute.js';
import cors from 'cors';

const app =express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "*"
}))

dotenv.config();
//Connect with MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err.message);
});

//routes
app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/products', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/subcategory', subcategoryRouter);
app.use('/api/rating', ratingRouter);
app.use('/api/orders', orderRouter);




const port =process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server at ${port}`);
})