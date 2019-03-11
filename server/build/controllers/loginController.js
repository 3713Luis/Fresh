"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataBase_1 = __importDefault(require("../dataBase"));
class loginController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consultAll = yield dataBase_1.default.query('SELECT * FROM usuarios');
            res.json(consultAll);
            console.log('Consultando Usuario');
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consultOne = yield dataBase_1.default.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            console.log(consultOne);
            if (consultOne.length > 0) {
                return res.json(consultOne[0]);
            }
            else {
                res.status(404).json({ text: "El usuario no existe" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield dataBase_1.default.query('INSERT INTO usuarios SET ?', [req.body]);
            res.json({ message: 'Usuario Registrado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield dataBase_1.default.query('DELETE FROM usuarios WHERE id = ?', [id]);
            res.json({ message: 'Usuario Eliminado' });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield dataBase_1.default.query('UPDATE usuarios SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Usuario Actualizado' });
        });
    }
}
const logController = new loginController();
exports.default = logController;
