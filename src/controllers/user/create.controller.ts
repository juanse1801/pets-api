import { Request, Response } from "express";
import { create as createService } from "../../services/user/create";

const createController = async (req: Request, res: Response) => {
  const {
    first_name,
    last_name,
    phone,
    age,
    email,
    password,
    address,

  } = req.body;

  const response = await createService({
    first_name,
    last_name,
    phone,
    age,
    email,
    password,
    address,
    pets: []
  });

  res.status(201).send(response);
};

export { createController };
