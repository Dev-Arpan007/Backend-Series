import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    catagory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Catagory",
        required: true
    }, 
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    ratingOutOf5:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        default: 0
    }
},{timeStamps: true})

export const Product = mongoose.model('Product', productSchema)