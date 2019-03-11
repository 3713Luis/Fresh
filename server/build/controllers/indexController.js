"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class indexController {
    index(req, res) {
        res.json({
            text: 'APPI is /api/index'
        });
    }
}
const indexRoutes = new indexController();
exports.default = indexRoutes;
