import AuthenticationRouter from "./router/AuthenticationRouter";
import * as swaggerDocument from "./swagger.json";
import NoteRouter from "./router/NoteRouter";
import Database from "./config/database";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.plugins();
        this.routes();
        this.swaggerUi();
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

    protected swaggerUi(): void {
        this.app.use("/api/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    };
};

const port = process.env.PORT;

const app = new App().app;

app.listen(port, () => {
    console.log("Server Successfully Started!");
});