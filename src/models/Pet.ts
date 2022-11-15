import mongoose, { Mongoose } from "mongoose";

// An interface that describes the atributes
interface PetAttrs {
  name: String
  animal_type: String
  description: String
  favorite_toy: String
  age: Number

}

// An interface that describes the document
interface PetDoc extends mongoose.Document {
  name: String
  animal_type: String
  description: String
  favorite_toy: String
  age: Number

}

// An interface that describes the model
interface PetModel extends mongoose.Model<PetDoc> {
  build(attrs: PetAttrs): PetDoc;
}

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    animal_type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    favorite_toy: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },

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

petSchema.set("versionKey", "version");

// An method to build a Pet
petSchema.statics.build = (attrs: PetAttrs) => {
  return new Pet(attrs);
};

const Pet = mongoose.model<PetDoc, PetModel>("pet", petSchema);

export { Pet, PetAttrs, PetDoc };
