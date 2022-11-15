import { Request, Response } from "express";
import { NotFoundError } from "../../common/errors/not-found-error";
import { getById as getByIdService } from "../../services/pet/getById";

const getByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await getByIdService(id);

  if(!response) {
    throw new NotFoundError();
  }

  res.status(200).send(response);
};

export { getByIdController };