import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import checkEnvVariable from "../utils/checkEnvVariable";

const authMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization as string;
    if (!token) {
      res.status(403).send("Access denied");
      return;
    }

    const decoded = jwt.verify(token, checkEnvVariable("JWT_SECRET"));

    req.user = decoded;
  } catch (error) {
    next(error);
  }
};

export default authMiddleWare;
