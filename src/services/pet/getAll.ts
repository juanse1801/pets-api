import { Pet, PetDoc } from "../../models/Pet";

const getAll = async (): Promise<PetDoc[]> => {
  const pet = await Pet.find().populate("adopter");
  return pet;
};

export { getAll };
