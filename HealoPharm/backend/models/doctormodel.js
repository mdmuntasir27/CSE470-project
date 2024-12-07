import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema(
    {
        dname: {
            type: String,
            required: true,
            trim: true,
        },
        demail: {
            type: String,
            required: true,
            trim: true,
            match: [/.+\@.+\..+/, "Please provide a valid email address"],
        },
        dpassword: {
            type: String,
            required: true,
        },
        specialization: {
            type: String,
            required: true,
            trim: true,
        },
        availableSlots: {
            type: [String],
            default: [],
        },
    }, {
        timestamps: true,
    });
    
    export const Doctor = mongoose.model('doctor', doctorSchema);