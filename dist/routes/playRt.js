"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playRt = void 0;
const express_1 = __importDefault(require("express"));
const playCon_1 = require("../controllers/playCon");
exports.playRt = express_1.default.Router();
exports.playRt.post("/", playCon_1.PLAYERS.Create);
exports.playRt.get("/", playCon_1.PLAYERS.FetchAll);
exports.playRt.get("/:id", playCon_1.PLAYERS.GetOne);
exports.playRt.put("/:id", playCon_1.PLAYERS.Update);
exports.playRt.delete("/:id", playCon_1.PLAYERS.Delete);
