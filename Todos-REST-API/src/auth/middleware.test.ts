import { sign } from "jsonwebtoken";
import { authenticate } from "./middleware";
import { SECRET } from "./secret";

describe('authenticate function', () => {
  it('should return 401 if no token', () => {
    const req = {
      headers: {}
    } as any;
    const res = {
      status(code: number) {
        expect(code).toBe(401);
        return this;
      },
      json(obj: any) {
        expect(obj).toEqual({
          msg: 'Unauthorized'
        });
      }
    } as any;
    const next = () => {};

    authenticate(req, res, next);
  });

  it('should return 401 if no token (with jest.fn())', () => {
    const req = {
      headers: {}
    } as any;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any;
    const next = () => {};

    authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      msg: 'Unauthorized'
    });
  });

  it('should call next if token is valid', () => {
    const token = sign({username: 'test'}, SECRET);

    const req = {
      headers: {
        authorization: `Bearer ${token}`
      }
    } as any;

    const res = {} as any;
    const next = jest.fn();

    authenticate(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
  });
});
