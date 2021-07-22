require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')



mongoose.connect( process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('conected to Database')) 


app.use(express.json())
  
const employeesRouter = require('./routes/employees') //Employee route
const rolesRouter     = require('./routes/role')    //Job roles route
const projectRouter     = require('./routes/project') //projects route
const employeeroleRouter     = require('./routes/employeerole') //employee roles route
const employeeprojectRouter     = require('./routes/employeeproject') //employee project route

//to visit the employees url   
app.use('/employees' , employeesRouter )   

//to visit the role url 
app.use('/role' , rolesRouter)
     
//to visit the project url 
app.use('/project' , projectRouter)
 
//to visit the employee url 
app.use('/employeerole' , employeeroleRouter) 

//to visit the employeeproject url 
app.use('/employeeproject' , employeeprojectRouter)

app.listen( 3000, () => console.log('Server Started')) 