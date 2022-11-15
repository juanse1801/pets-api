import { Request, Response } from "express";
import { NotFoundError } from "../../common/errors/not-found-error";
import { getAll as getAllService } from "../../services/pet/getAll";

const getAllController = async (req: Request, res: Response) => {
  const response = await getAllService();

  if(!response.length) {
    throw new NotFoundError();
  }

  res.status(200).send(response);
};

export { getAllController };