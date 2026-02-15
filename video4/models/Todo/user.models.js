import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        length:{
            min: [6, "Minimum 6 length character required"],
            max: [12, "Maximum 12 length characters are allowed"]
        }
    }


},{timestamps: true})

export const User = mongoose.model('User', userSchema)