import express from "express";
const router = express.Router();
import {Admin} from "../models/adminmodel.js";

router.post('/addAdmin', async (req, res) => {
    try {
        if(!req.body.username || !req.body.adminpassword) {
            return res.status(400).send({
                message: "Please fillup the information form properly",
            });
        }
        const newAdmin = {
            username: req.body.username,
            adminpassword: req.body.adminpassword,
        };
        const admin = await Admin.create(newAdmin);
        console.log("Admin added successfully");
        return res.status(201).send(admin);
    } catch (error) {
        if (error.code === 11000 || error.name === "ValidationError"){
            return res.status(400).send({
                messsage: "Username is invalid!",
        });
        }
    }
});

export default router;