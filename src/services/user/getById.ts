import { User, UserDoc } from "../../models/User";

const getById = async (id: string): Promise<UserDoc | null> => {
  const user = await User.findById(id).populate("pets");
  return user;
};

export { getById };
