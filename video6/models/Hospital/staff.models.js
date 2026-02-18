import mongoose from "mongoose"

const staffSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 

    worksInHospital :{
        type: String,
        required: true
    },
    worksInDept:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, {timestamps: true})

export const Staff = mongoose.model('Staff', staffSchema)