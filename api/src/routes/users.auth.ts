import express from 'express'
import { Register } from '../controllers/Auth'


const router = express.Router()

// Register : 
router.post('/register', Register)


export default router;