import { createNoteSchema, updateNoteSchema } from "../schema/NoteSchema";
import NoteController from "../controller/NoteController";
import { auth } from "../middleware/AuthMiddleware";
import validate from "../helper/validate";
import BaseRoutes from "./BaseRouter";

class NoteRoutes extends BaseRoutes {

    public routes(): void {
        this.router.post("/", auth, validate(createNoteSchema), NoteController.create);
        this.router.put("/:id", auth, validate(updateNoteSchema), NoteController.update);
        this.router.delete("/:id", auth, NoteController.delete);
        this.router.get("/", auth, NoteController.getAll);
        this.router.get("/:id", auth, NoteController.getById);
    };
};

export default new NoteRoutes().router;