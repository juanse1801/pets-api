import mongoose from "mongoose";

// An interface that describes the atributes
interface UserAttrs {
  first_name: String
  last_name: String
  phone: String
  age: Number
  email: String
  password: String
  address: String
  pets: Array<mongoose.Schema.Types.ObjectId>

}

// An interface that describes the document
interface UserDoc extends mongoose.Document {
  first_name: String
  last_name: String
  phone: String
  age: Number
  email: String
  password: String
  address: String
  pets: Array<mongoose.Schema.Types.ObjectId>

}

// An interface that describes the model
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    }, 
    last_name: {
      type: String, 
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pets: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "pet",
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

userSchema.set("versionKey", "version");

// An method to build a User
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("user", userSchema);

export { User, UserAttrs, UserDoc };
