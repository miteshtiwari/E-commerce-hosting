import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectdb from './config/db.js';
import morgan from 'morgan';
import cookieParser  from "cookie-parser";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from "cors";
import path from 'path'
// configure dotenv
dotenv.config();

// databse connection
connectdb();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, './client/build')))

// routes 
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);

// app.use('*',function(req,res){
//   res.sendFile(path.join(__dirname,'./client/build/index.html'));
// })
app.get('/',(req,res)=>{
  res.send("server is running ");
})
//port
const PORT = process.env.PORT|| 8080;
app.listen(PORT, () => {
  console.log(`Server  running on port ${process.env.PORT}`.bgCyan.white);
})