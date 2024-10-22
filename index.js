import dotenv from 'dotenv'
import express from 'express'
import connectDB from "./data/db";

dotenv.config();
const app = express();
connectDB();


