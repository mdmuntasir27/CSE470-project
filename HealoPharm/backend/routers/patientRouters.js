import express from "express";
const router = express.Router();
import { Patient } from "../models/patientmodel.js"; 

router.post('/addPatient', async (req, res) => {
    try {
        if (!req.body.pname || !req.body.pemail || !req.body.ppassword ||  !req.body.page || !req.body.paddress || !req.body.phone) {
            return res.status(400).send({
                message: "Please fill up the information form properly",
            });
        }

        const newPatient = {
            pname: req.body.pname,
            pemail: req.body.pemail,
            ppassword: req.body.ppassword,
            page: req.body.page, 
            paddress: req.body.paddress, 
            phone: req.body.phone,
            insuranceStatus: false,
            dueAmount: 0,
            pAvailability: true, 
        };

        const patient = await Patient.create(newPatient);
        return res.status(201).send(patient);
    } catch (error) {
        if (error.code === 11000 || error.name === "ValidationError") {
            return res.status(400).send({
                message: "Your email is not valid or already exists.",
            });
        }
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

router.get("/getPatients", async (req, res) => {
    try {
        const patients = await Patient.find({}); 
        return res.status(200).json(patients); 
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get("/getPatients/:pemail", async (req, res) => {
    try {
        const { pemail } = req.params;
        const patient = await Patient.findOne({ pemail });
        if (!patient) {
            return res.status(404).send({ message: "Patient not found!" }); 
        }
        return res.status(200).json(patient);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put("/updatePatInfo/:pemail", async (req, res) => {
    try {
        const { pemail } = req.params;
        const updateData = req.body;
        const result = await Patient.findOneAndUpdate({ pemail }, updateData, { runValidators: true });
        if (!result) {
            return res.status(404).send({ message: "Patient not found!" });
        }
        return res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete("/deletePat/:pemail", async (req, res) => {
    try {
        const { pemail } = req.params;
        const result = await Patient.findOneAndDelete({ pemail });
        if (!result) {
            return res.status(404).send({ message: "Patient not found!" });
        }
        return res.status(200).json({ message: "Deleted successfully!" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
