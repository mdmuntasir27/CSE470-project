import express from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import {Doctor} from './models/doctormodel.js';
import doctorRouters from "./routers/doctorRouters.js";
import cors from "cors";

const app = express();
app.use(
    cors({
        origin: "http://localhost:4000",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);
app.use(express.json());
app.use('/', doctorRouters);

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("Welcome to HealoPharm");
});

mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App has connected to the database");
    app.listen(PORT, () => {
        console.log(`App is listening to the port ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});