import express, { Application, Request, Response } from "express";
import AuthenticationRouter from "./router/AuthenticationRouter";
import Database from "./config/database";
import NoteRouter from "./router/NoteRouter";

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.plugins();
        this.routes();
    };

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync();
    };

    protected routes(): void {
        this.app.use("/api/v1/note", NoteRouter);
        this.app.use("/api/v1/user", AuthenticationRouter);
    };

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    };
};

const port = process.env.PORT;

const app = new App().app;

app.listen(port, () => {
    console.log("Server Successfully Started!");
});