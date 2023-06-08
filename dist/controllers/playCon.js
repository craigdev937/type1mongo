"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAYERS = void 0;
const Players_1 = require("../models/Players");
class PlayerClass {
    Create = async (req, res, next) => {
        try {
            const player = new Players_1.Players({
                title: req.body.title, first: req.body.first,
                last: req.body.last, age: req.body.age,
                email: req.body.email, info: req.body.info
            });
            await player.save()
                .then((player) => res.status(201)
                .json(player));
        }
        catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };
    FetchAll = async (req, res, next) => {
        try {
            await Players_1.Players
                .find()
                .then((players) => res.json(players));
        }
        catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };
    GetOne = async (req, res, next) => {
        try {
            await Players_1.Players
                .findById(req.params.id)
                .then((player) => res.status(201)
                .json(player));
        }
        catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };
    Update = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { title, first, last, age, email, info } = req.body;
            await Players_1.Players
                .findByIdAndUpdate(id, {
                title, first, last, age, email, info
            })
                .then(() => res.status(201)
                .json("The Player was Updated!"));
        }
        catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };
    Delete = async (req, res, next) => {
        try {
            await Players_1.Players
                .findByIdAndDelete(req.params.id)
                .then(() => res.status(201)
                .json("The Player was Deleted!"));
        }
        catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };
}
;
exports.PLAYERS = new PlayerClass();
