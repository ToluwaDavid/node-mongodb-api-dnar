const express = require('express')
const router = express.Router()
const Employed = require('../models/employed')

//Getting all employee
 router.get('/' , async (req, res) =>{
    try{
      const employed = await Employed.find()
      res.json(employed)
    } catch(err){
      res.status(500).json({message: err.message})
    }
 })
//Getting one employee
router.get('/:id' , getEmployed, (req, res) =>{
   
   res.send(res.employed)
 })
// Creating one employee
router.post('/' ,  async (req, res) =>{
   const employed = new Employed({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      country: req.body.country,

   })
   try{
      const newEmployed = await employed.save() 
      res.status(201).json(newEmployed)
   } catch(err){
      res.status(400).json({message: err.message})
   }
     
 })
// Updating one employee
router.patch('/:id' ,  getEmployed,  async (req, res) =>{
   if(req.body.first_name != null){
      res.employed.first_name = req.body.first_name
   }
   if(req.body.last_name != null){
      res.employed.last_name = req.body.last_name
   }
   if(req.body.email != null){
      res.employed.email = req.body.email
   }
   if(req.body.country != null){
      res.employed.country = req.body.country
   }
   try{
      const updateEmployed = await res.employed.save()
      res.json(updateEmployed)
   } catch( err ){
      res.status(400).json({ message: err.message})
   }
     
 })
//deleting one employee
router.delete('/:id' ,  getEmployed, async(req, res) =>{
   try{
      await res.employed.remove()
      res.json({message: 'Deleted user'})
   } catch(err) {
      res.status(500).json({ message: err.message})
   }
 })


 //function to get an employee by using the id of a user
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


module.exports = router