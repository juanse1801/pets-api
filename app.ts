
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "express-async-errors";
import { json } from "body-parser";
import { userRouter } from "./src/routes/user.router";
import { errorHandler } from "./src/common/middlewares/error-handler";
import { NotFoundError } from "./src/common/errors/not-found-error";
import { petRouter } from "./src/routes/pet.router";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "authorization",
    ],
  })
);
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use("/user",userRouter);
app.use("/pets", petRouter);
app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
