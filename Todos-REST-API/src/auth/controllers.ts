import { NextFunction, Request, Response } from "express";
import { sign } from 'jsonwebtoken';
import { Credentials } from "./interfaces";
import { SECRET } from "./secret";
import UserModel from '../users/model-mongoose';


export async function loginController(req: Request, res: Response, next: NextFunction) {
  const credentials: Credentials = req.body;

  const user = await UserModel.findOne({username: credentials.username, password: credentials.password});

  if (user) {
    // generate a valid JWT
    return res.json({
      token: sign({ username: credentials.username }, SECRET),
    });
  }

  res.status(400).json({
    msg: 'Invalid credentials',
  })
}
