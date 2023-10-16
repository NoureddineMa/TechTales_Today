const express = require('express')
import { Request , Response } from "express"
require('dotenv').config()
import { checkDataBaseConnection } from "./config/Database.Init"
import userRoutes from './src/routes/users.auth'

// set up middelwares :

checkDataBaseConnection()

const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`)
})
// middelwares : 
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/auth',userRoutes)



