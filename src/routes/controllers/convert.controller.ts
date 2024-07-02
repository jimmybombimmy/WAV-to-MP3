import {Request, Response} from "express";

export const hello = (req: Request, res: Response) => {
  res.status(200).send({message: "this just says hello and does nothing else"})
}