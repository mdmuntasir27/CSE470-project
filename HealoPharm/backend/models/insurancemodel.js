import mongoose from "mongoose";

const insuranceSchema = mongoose.Schema({
    pname: {
        type: String,
        required: true,
        trim: true,
    },
    pemail: {
        type: String,
        required: true,
        trim: true,
        match: [/.+\@.+\..+/, "Please provide a valid email address"],
    },
    claimDetails: {
        type: String,
        required: true,
        trim: true,
    },
    
});

export const Insurance = mongoose.model("Insurance", insuranceSchema);
