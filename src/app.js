import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import routes from './routes/url.routes.js';
import connectDatabase from './config/database.js';

const app = express();
config()

//Database connection
connectDatabase()

app.use(cors());
app.use(json());

//Route
app.use('/api/url', routes)

//Error handler middleware
app.use((err, req, res, next)=>{
  res.status(err.statusCode || 500).json({error: err.message});
})

export default app;