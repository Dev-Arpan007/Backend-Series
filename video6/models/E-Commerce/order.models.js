import mongoose from "mongoose"

const orderDetailSchema = new mongoose.Schema({
    productDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    itemsOrdered: {
        type: Number,
        required: true

    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    address:{
        type: String,
        required: true
    },
    orderDetails:{
        tyep: [orderDetailSchema]
    },
    orderStatus:{
        type: String,
        enum:["Pending", "Cancelled", "Delivered"],  
        //  these 3 options to choose for this field in DB
        default: "Pending"
    }
},{timeStamps: true})

export const Order = mongoose.model('Order', orderSchema)