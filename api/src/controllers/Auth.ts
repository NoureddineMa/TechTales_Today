import { Request, Response } from 'express';
import { PrismaClient } from '../generated/client';
import bcrypt from 'bcrypt';
import { Prisma } from '../generated/client';
const jwt = require('jsonwebtoken')

const prisma = new PrismaClient();

const Register = async (req: Request, res: Response) => {
  const { FirstName, LastName, Email, Password } = req.body;

  if (!FirstName || !LastName || !Email || !Password) {
    return res.status(400).json({ message: 'Please fill all fields!' });
  }

  const existingUserWithEmail = await prisma.user.findFirst({
    where: { Email },
  });

  if (existingUserWithEmail) {
    return res
      .status(400)
      .json({ message: 'Email is already in use. Please try another email.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(Password, 10);
    const userCreated = await prisma.user.create({
        data: {
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Password: hashedPassword,
        } as Prisma.userCreateInput ,
      })
    console.log(userCreated);
    return res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Registration failed' });
  }
};


// Login 

const Login = async (req:Request , res:Response) => {

    const { Email , Password } = req.body;

    if (!Email || !Password ){
      return res.status(400).json({message : "Please Provide Both Email and Password !"})
    }

    const user = await prisma.user.findFirst({
      where : { Email }
    })

    if (!user){
      return res.status(400).json({message: "Password Or Email Incorrect !"})
    }
    const passwordMatch = await bcrypt.compare(Password, user.Password)

    if (!passwordMatch){
      return res.status(400).json({message: "Invalid Password , try again please !"})
    }

    const token = jwt.sign({ userId : user.id } , process.env.JWT_SECRET , {
      expiresIn: '24h'
    })

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    }).status(200).json({
      "success" : true,
      "message" : "Succes"
    })

}

export { Register  , Login };
