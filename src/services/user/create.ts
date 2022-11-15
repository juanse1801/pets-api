import { User, UserAttrs, UserDoc } from "../../models/User";

const create = async (attrs: UserAttrs): Promise<UserDoc> => {
  const user = User.build(attrs);
  await user.save();
  return user;
};

export { create };
