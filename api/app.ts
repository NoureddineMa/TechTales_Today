const express = require('express')
const app = express()
import { Request , Response } from "express"
require('dotenv').config()
import { checkDataBaseConnection } from "./config/Database.Init"


// set up middelwares :

checkDataBaseConnection()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`)
})

