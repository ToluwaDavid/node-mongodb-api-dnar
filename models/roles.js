const mongoose = require('mongoose')

const rolesSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    }
   
})

module.exports = mongoose.model('Roles' , rolesSchema)