"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("../controllers/loginController"));
class loginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', loginController_1.default.getAll);
        this.router.get('/:id', loginController_1.default.getOne);
        this.router.post('/', loginController_1.default.create);
        this.router.delete('/:id', loginController_1.default.delete);
        this.router.put('/:id', loginController_1.default.put);
    }
}
const loginRoute = new loginRoutes();
exports.default = loginRoute.router;
