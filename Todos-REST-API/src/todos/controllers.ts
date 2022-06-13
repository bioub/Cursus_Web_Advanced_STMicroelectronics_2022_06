import { NextFunction, Request, Response } from 'express';
import { Todo } from './interfaces';
import Model from './model-mongoose';

export async function listController(req: Request, res: Response, next: NextFunction) {
  const todos = await Model.find();
  res.json(todos);
}

export async function showController(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const todo = await Model.findById(id);

  if (!todo) {
    return next();
  }

  res.json(todo);
}

export async function createController(req: Request, res: Response, next: NextFunction) {
  const todo: Todo = req.body;

  const todoCreated = await Model.create(todo);
  res.status(201).json(todoCreated);
}

export async function replaceController(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const todo: Todo = req.body;
  const todoReplaced = await Model.findOneAndReplace({_id: id}, todo);

  if (!todoReplaced) {
    return next();
  }

  res.json(todoReplaced);
}

export async function updateController(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const todo: Todo = req.body;
  const todoUpdated = await Model.findByIdAndUpdate(id, todo);

  if (!todoUpdated) {
    return next();
  }

  res.json(todoUpdated);
}

export async function deleteController(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const todoDeleted = await Model.findByIdAndDelete(id);

  if (!todoDeleted) {
    return next();
  }

  res.json(todoDeleted);
}
