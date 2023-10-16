import express, { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const app = express();

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  jwt.verify(token , process.env.JWT_SECRET , (decoded: any,err:any) => {
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token." });
    }
    (req as any).userId = decoded.userId;
    next();
  });
};


export { verifyToken }
