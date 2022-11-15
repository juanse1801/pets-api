import { User, UserDoc } from "../../models/User";

const getAll = async (): Promise<UserDoc[]> => {
  const user = await User.find().populate("pets");
  return user;
};

export { getAll };
