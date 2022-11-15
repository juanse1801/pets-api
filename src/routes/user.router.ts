
import express from "express";
import { addPetController } from "../controllers/user/addPet.controller";
import { createController } from "../controllers/user/create.controller";
import { getAllController } from "../controllers/user/getAll.controller";
import { getByIdController } from "../controllers/user/getById.controller";

const router = express.Router();

router.post("/", createController);

router.patch("/addpet/:id", addPetController);

router.get("/", getAllController);

router.get("/:id", getByIdController);

export { router as userRouter };
