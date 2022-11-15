import { Request, Response } from "express";
import { create as createService } from "../../services/pet/create";

const createController = async (req: Request, res: Response) => {
  const {
    name,
    animal_type,
    description,
    favorite_toy,
    age,
  } = req.body;

  const response = await createService({
    name,
    animal_type,
    description,
    favorite_toy,
    age,
  });

  res.status(201).send(response);
};

export { createController };
