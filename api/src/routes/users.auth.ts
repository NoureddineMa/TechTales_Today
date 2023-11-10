import express from 'express';
import { Register, Login } from '../controllers/Auth';

const router = express.Router();

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register User
 *     description: Post user data.
 *     responses:
 *       200:
 *         description: Creation User.
 */
router.post('/register', Register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login User
 *     description: Post user data to check in the database.
 *     responses:
 *       200:
 *         description: Authentication Success.
 */
router.post('/login', Login);

export default router;
