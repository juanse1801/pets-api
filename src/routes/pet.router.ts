
import express from "express";
import { createController } from "../controllers/pets/create.controller";
import { getAllController } from "../controllers/pets/getAll.controller";
import { getByIdController } from "../controllers/pets/getById.controller";

const router = express.Router();

router.post("/", createController);

router.get("/", getAllController);

router.get("/:id", getByIdController);

export { router as petRouter };
