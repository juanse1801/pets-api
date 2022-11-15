import { Request, Response } from "express";
import { NotFoundError } from "../../common/errors/not-found-error";
import { addPet as addPetService } from "../../services/user/addPet";

const addPetController =async (req:Request, res: Response) => {
    const {
        petId,
    } = req.body;

    const { id } = req.params;

    const response = await addPetService(id, petId);

    if(!response) {
        throw new NotFoundError();
      }

    res.status(204).send(response)
}

export { addPetController };