import { Request, Response } from 'express';
import { PrismaClient } from '../generated/client';
import bcrypt from 'bcrypt';
import { Prisma } from '../generated/client';

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

export { Register };
