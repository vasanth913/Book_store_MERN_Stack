import  express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

//Middleware  for handling CORS POLICY
//Option 1: Allow all origins with default of cors (*)
app.use(cors()); 

//Option 2: Allow custom origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET,POST,PUT,DELETE'],
//     allowedHeaders: ['Content-Type']
// })); 

//Middleware for parsing request body
app.use(express.json());

//get method 
app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial');
})

app.use('/books', booksRoute)

//connect mongodb

mongoose
.connect(mongoDBURL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error)
})