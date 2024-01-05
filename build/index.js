"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
    }
    ;
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Welcome Home");
        });
    }
    ;
}
;
const port = 8080;
const app = new App().app;
app.listen(port, () => {
    console.log("Server Successfully Started!");
});
