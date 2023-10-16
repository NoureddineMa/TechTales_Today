import express from 'express'
import { Register , Login } from '../controllers/Auth'


const router = express.Router()

// Register : 
router.post('/register', Register)
router.post('/login', Login)


export default router;