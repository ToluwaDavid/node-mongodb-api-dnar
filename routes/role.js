const express = require('express')
const router = express.Router()
const Roles = require('../models/roles')

//Getting all roles
 router.get('/' , async (req, res) =>{
    try{
      const roles = await Roles.find()
      res.json(roles)
    } catch(err){
      res.status(500).json({message: err.message})
    }
 })



module.exports = router