import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import Book from '../schemas/Book';

interface MyToken {
  id: string;
  exp: number;
  iat: number;
}

class BookController {
  public async index(req: Request, res: Response): Promise<Response> {
    const authorization = req.headers.authorization?.split(' ')[1];
    const decoded = <MyToken>jwt.decode(authorization || '');
    const books = await Book.find({ userId: decoded.id });
    return res.json(books);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { title, author, description } = req.body;
    const authorization = req.headers.authorization?.split(' ')[1];
    const decoded = await (<MyToken>jwt.decode(authorization || ''));

    const book = await Book.create({
      userId: decoded.id,
      cover: req.file?.filename,
      imageName: req.file?.originalname || '',
      title,
      author,
      description,
    });

    return res.json(book);
  }
}

export default new BookController();
