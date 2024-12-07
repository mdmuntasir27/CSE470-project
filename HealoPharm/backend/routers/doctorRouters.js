import express from "express";
const router = express.Router();
import {Doctor} from "../models/doctormodel.js";

router.post('/addDoctor', async (req, res) => {
    try {
        if(!req.body.dname || !req.body.demail || !req.body.dpassword || !req.body.specialization || !req.body.availableSlots) {
            return res.status(400).send({
                message: "Please fillup the information form properly",
            });
        }
        const newDoctor = {
            dname: req.body.dname,
            demail: req.body.demail,
            dpassword: req.body.dpassword,
            specialization: req.body.specialization,
            availableSlots: req.body.availableSlots,
        };
        const doctor = await Doctor.create(newDoctor);
        return res.status(201).send(doctor);
    } catch (error) {
        if (error.code === 11000 || error.name === "ValidationError"){
            return res.status(400).send({
                messsage: "Your email is not valid or already exists.",
        });
        }
    }
});

router.get("/getDoctors", async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        return res.status(200).json(doctors);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

router.get("/getDoctors/:demail", async (req, res) => {
    try {
        const {demail} = req.params;
        const doctors = await Doctor.findOne({demail});
        if (doctors === null){
            return res.status(404).send({message: "Doctor not found!"});
        }
        return res.status(200).json(doctors);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

router.get("/getDoctor/:specialization", async (req, res) => {
    try {
        const {specialization} = req.params;
        const doctors = await Doctor.find({ specialization });
        if (doctors.length === 0){
            console.log(doctors.length);
            return res.status(404).send({message: "Doctor not found with this specialization!"});
        }
        return res.status(200).json(doctors);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

router.put("/updateDocInfo/:demail", async (req, res) => {
    try {
        const {demail} = req.params;
        const updateData = req.body;
        const result = await Doctor.findOneAndUpdate({demail}, updateData, {runValidators: true});
        if (!result){
            return res.status(404).send({message: "Doctor not found!"});
        }
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

router.delete("/deleteDoc/:demail", async (req, res) => {
    try {
        const {demail} = req.params;
        const result = await Doctor.findOneAndDelete({demail});
        if (!result){
            return res.status(404).send({message: "Doctor not found!"});
        }
        return res.status(200).json({message: "Deleted successfully!"});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export default router;