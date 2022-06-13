import { NextFunction, Request, Response } from "express";
import { sign } from 'jsonwebtoken';
import { Credentials } from "./interfaces";
import { SECRET } from "./secret";

const fakeUser = {
  username: 'romain',
  password: '1234',
};

export function loginController(req: Request, res: Response, next: NextFunction) {
  const credentials: Credentials = req.body;

  if (credentials.username === fakeUser.username && credentials.password === fakeUser.password) {
    // generate a valid JWT
    res.json({
      token: sign({ username: credentials.username }, SECRET),
    });
  }

  res.status(400).json({
    msg: 'Invalid credentials',
  })
}
