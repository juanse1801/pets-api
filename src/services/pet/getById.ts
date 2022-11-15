import { Pet, PetDoc } from "../../models/Pet";

const getById = async (id: string): Promise<PetDoc | null> => {
  const pet = await Pet.findById(id).populate("adopter");
  return pet;
};

export { getById };
