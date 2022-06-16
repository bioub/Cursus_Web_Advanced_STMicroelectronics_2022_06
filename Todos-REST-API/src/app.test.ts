import { sign } from 'jsonwebtoken';
import request from 'supertest';
import app from './app';
import { SECRET } from './auth/secret';
import Model from './todos/model-mongoose';
import {jest} from '@jest/globals';

jest.mock('./todos/model-mongoose');

describe('/api/todos', () => {
  describe('GET /api/todos', () => {
    it('should respond 401 if no token', async () => {
      const res = await request(app).get('/api/todos');

      expect(res.statusCode).toBe(401);
      expect(res.body).toEqual({
        msg: 'Unauthorized',
      });
    });

    it('should respond 200', async () => {
      const token = sign({username: 'test'}, SECRET);

      (Model.find as any).mockResolvedValue([{id: 1, title: 'ABC'}]);

      const res = await request(app).get('/api/todos').auth(token, {type: 'bearer'});

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{"id": 1, "title": "ABC"}]);
    });
  });

});
