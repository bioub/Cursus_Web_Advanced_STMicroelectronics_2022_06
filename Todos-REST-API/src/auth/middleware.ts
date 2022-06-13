import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET } from './secret';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.slice(7);

  if (!token) {
    return res.status(401).json({
      msg: 'Unauthorized',
    });
  }

  try {
    verify(token, SECRET);
    next();
  } catch(err) {
    res.status(401).json({
      msg: 'Unauthorized',
    });
  }
}
