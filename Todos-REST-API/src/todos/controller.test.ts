import { listController } from "./controllers";
import Model from './model-mongoose';
import {jest} from '@jest/globals';

jest.mock('./model-mongoose');

describe('todos controllers', () => {
  describe('listController function', () => {
    it('should call res.json with todos', async () => {
      const req = {} as any;
      const res = {
        json: jest.fn(),
      } as any;
      const next = () => {};

      (Model.find as any).mockResolvedValue([{id: 1, title: 'ABC'}]);

      await listController(req, res, next);

      expect(res.json).toHaveBeenCalledWith([{id: 1, title: 'ABC'}]);

      // ATTENTION a restaurer vos fonctions d'originie
      (Model.find as any).mockRestore();
    });
    it('should not return mocked value', async () => {
      const data = await Model.find();
      expect(data).not.toEqual([{id: 1, title: 'ABC'}]);
    });
  });
});
