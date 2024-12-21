import express from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import doctorRouters from "./routers/doctorRouters.js";
import ambulanceRouters from "./routers/ambulanceRouters.js";
import patientRouters from "./routers/patientRouters.js";
import tokenRouters from './routers/tokenRouters.js';
import doctorTokenRouters from './routers/doctorTokenRouters.js';
import adminRouters from './routers/adminRouters.js';
import adminTokenRouters from './routers/adminTokenRouters.js';
import appointmentRouters from './routers/appointmentRouters.js';
import cors from "cors";

const app = express();
app.use(cors());
// app.use(
//     cors({
//         origin: "http://localhost:4000",
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );
app.use(express.json());
app.use('/', doctorRouters);
app.use('/', ambulanceRouters);
app.use('/', patientRouters);
app.use('/', tokenRouters);
app.use('/', doctorTokenRouters);
app.use('/', adminRouters);
app.use('/', adminTokenRouters);
app.use('/', appointmentRouters);

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