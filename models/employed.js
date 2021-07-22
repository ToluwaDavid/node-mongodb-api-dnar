const mongoose = require('mongoose')

const employedSchema = new mongoose.Schema({
    first_name:{
        type: String,
    },
    last_name:{
        type: String,
    },
    email:{
        type: String,
    },
    country:{
        type: String
        
    }
})

module.exports = mongoose.model('Employed' , employedSchema)