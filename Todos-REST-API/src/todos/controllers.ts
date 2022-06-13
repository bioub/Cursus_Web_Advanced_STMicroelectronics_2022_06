import { Request, Response } from 'express';
import Model from './model';

export async function listController(req: Request, res: Response) {
  const todos = await Model.find();
  res.json(todos)
}

export async function showController(req: Request, res: Response) {}

export async function createController(req: Request, res: Response) {}

export async function replaceController(req: Request, res: Response) {}

export async function updateController(req: Request, res: Response) {}

export async function deleteController(req: Request, res: Response) {}
