import { User, UserDoc } from "../../models/User";

const addPet = async (userId: String, petId:String): Promise<UserDoc | null> => {
  const user = await User.findByIdAndUpdate(userId, {
    $addToSet: { pets: petId}
  })
  return user;
};

export { addPet };
