const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Usuario = new Schema({
    nome:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Usuario', Usuario)