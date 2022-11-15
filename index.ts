import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL must be defined");
    }

  try {
    await mongoose.connect(process.env.DB_URL, {});
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(err);
  }

  app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on port", process.env.PORT || 8080);
  });
};

start();
