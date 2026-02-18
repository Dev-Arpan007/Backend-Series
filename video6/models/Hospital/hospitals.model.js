import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    specializedIn:{
        type: String,
        required: true
    },
    contactNo :{
        type: String,
        required: true
    }
}, {timestamps: true})

export const Hospital = mongoose.model('Hospital', hospitalSchema)