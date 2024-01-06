import { NoteRepo } from "../repo/NoteRepo";
import { Note } from "../model/Note";
import { Request, Response } from "express";

class NoteController {

    async create(req: Request, res: Response) {

        try {

            const { name, description } = req.body;

            const new_note = new Note();

            new_note.name = name;

            new_note.description = description;

            await new NoteRepo().save(new_note);

            res.status(201).json({
                status: "Created!",
                message: "Successfully Created Note!",
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }

    };

    async update(req: Request, res: Response) {

        try {

            const { name, description } = req.body;

            let id = parseInt(req.params["id"]);

            const new_note = new Note();

            new_note.id = id;

            new_note.name = name;

            new_note.description = description;

            await new NoteRepo().update(new_note);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully Updated Note!",
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }

    };

    async delete(req: Request, res: Response) {

        try {

            let id = parseInt(req.params["id"]);

            await new NoteRepo().delete(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully Deleted Note!",
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }

    };

    async getById(req: Request, res: Response) {

        try {

            let id = parseInt(req.params["id"]);

            const note_Data = await new NoteRepo().getById(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully Fetched Note By ID!",
                data: note_Data
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }

    };

    async getAll(req: Request, res: Response) {

        try {

            const note_Data = await new NoteRepo().getAll();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully Fetched All Notes Data!",
                data: note_Data
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }

    };

};

export default new NoteController();