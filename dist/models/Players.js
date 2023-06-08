"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Players = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
;
const PlayerSchema = new mongoose_1.default.Schema({
    title: { type: String }, first: { type: String },
    last: { type: String }, age: { type: Number },
    email: { type: String }, info: { type: String }
});
exports.Players = mongoose_1.default.model("Players", PlayerSchema);
