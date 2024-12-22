import express from 'express';
import { config } from 'dotenv';
import app from './src/app.js';

config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server listening on http://localhost:${PORT}`);
});