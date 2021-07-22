const express = require('express')
const router = express.Router()
const Employed = require('../models/employed')
const Project = require('../models/projects')

//Using the user-id to get the employee-id and project-id
 router.get('/:id' , getEmployed, getProject, async (req, res) =>{
    try{
      res.json({employee: employed.id , project: project.id })
    } catch(err){
      res.status(500).json({message: err.message}) //status shows a server error
    }
 })


 //function to get the employee by using the id of a user
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

  //function to get the project by using the id of a project
 async function getProject(req, res, next){
    let project
    try{
      project = await Project.findById(req.params.id)
      if(project == null){
         return res.status(404).json({message: 'cannot find user Project'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message}) 
    }
    res.project = project
    next()
 }


module.exports = router