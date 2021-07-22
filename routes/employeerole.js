const express = require('express')
const router = express.Router()
const Employed = require('../models/employed')
const Roles = require('../models/roles')

//Getting all employee
 router.get('/:id' , getEmployed, getRole, async (req, res) =>{
    try{
      res.json({employed, role})
    } catch(err){
      res.status(500).json({message: err.message})
    }
 })


 //function to get the id of a user
 async function getEmployed(req, res, next){
    let employed
    try{
      employed = await Employed.findById(req.params.id)
      if(employed == null){
         return res.status(404).json({message: 'cannot find employee'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message}) 
    }
    res.employed = employed
    next()
 }

  //function to get the id of a user
 async function getRole(req, res, next){
    let role
    try{
      role = await Roles.findById(req.params.id)
      if(role == null){
         return res.status(404).json({message: 'cannot find job role'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message}) 
    }
    res.role = role
    next()
 }


module.exports = router