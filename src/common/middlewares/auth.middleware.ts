import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@/common/config';   
import { NotFoundException, UnauthorizedException } from '../exceptions/HttpException';
import { UserModel } from '../../user/schemas/user.schema';
import { DataStoredInToken, RequestWithUser } from '../../auth/interfaces/auth.interface';

const getAuthorization = (req: RequestWithUser) => {
  const coockie = req.cookies['Authorization'];
  if (coockie) return coockie;

  const header = req.header('Authorization');
  if (header) return header.split('Bearer ')[1];

  const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["x-token"];
  if (token) return token

  return null;
}

export const AuthMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const Authorization = getAuthorization(req);

    if (Authorization) {
      const { _id } = verify(Authorization, SECRET_KEY) as DataStoredInToken;
      console.log(_id)
      const findUser = await UserModel.findById(_id);

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new UnauthorizedException('Wrong authentication token'));
      }
    } else {
      next(new NotFoundException('Authentication token missing'));
    }
  } catch (error) {
    next(new UnauthorizedException('Wrong authentication token'));
  }
};

