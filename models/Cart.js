const mongoose = require('mongoose')

const prodcartSchame = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required:true       
    },
    quantity:{
        type:Number,
        required:true
    }
}, {id:false})


const cartScheme = new mongoose.Schema({
    userId:{
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Users'
        }
    },
    items: {
        type: [prodcartSchame],
        required: true
    }
    
})