import { NextFunction, Request, Response } from 'express';
import { User } from './interfaces';
import Model from './model-mongoose';

export async function listController(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await Model.find({}, 'username');

    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function showController(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const user = await Model.findById(id, 'username');

    if (!user) {
      return next();
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function createController(req: Request, res: Response, next: NextFunction) {
  try {
    const user: User = req.body;

    const userCreated = await Model.create(user);
    res.status(201).json(userCreated);
  } catch (err) {
    next(err);
  }
}
