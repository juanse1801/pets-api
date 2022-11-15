import { Pet, PetAttrs, PetDoc } from "../../models/Pet";

const create = async (attrs: PetAttrs): Promise<PetDoc> => {
  const pet = Pet.build(attrs);
  await pet.save();
  return pet;
};

export { create };
