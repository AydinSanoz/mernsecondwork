const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
    productName = {
        type : String,
        required : true,
    },
    desription = {
        type : String,
        required : false,

    },
    imagePath = {
        type : String,
        default : 'http://via.placeholder.com/250x250.png?text=No+Image',
    },
    quantity = {
        type : Number,
        default : 0
    },
    createdId= {
        type : String,
    },
    status = {
        type : String,
        default :'created'
    },
    createdDate = {
        type : Date,
        default: Date.now()
    },
    updatedDate = {
        type : Date,
        default : Date.now()
    },
    deletedDate = {
        type : Date,
        default: Date.now()
    }
},{})

module.exports = Product = mongoose('Product', schema)