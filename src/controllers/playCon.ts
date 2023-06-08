import express from "express";
import { IPlayer, Players } from "../models/Players";

class PlayerClass {
    Create: express.RequestHandler = async (req, res,next) => {
        try {
            const player: IPlayer = new Players({
                title: req.body.title, first: req.body.first,
                last: req.body.last, age: req.body.age,
                email: req.body.email, info: req.body.info
            })
            await player.save()
            .then((player) => res.status(201)
            .json(player));
        } catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };

    FetchAll: express.RequestHandler = 
    async (req, res, next) => {
        try {
            await Players
            .find<IPlayer>()
            .then((players) => res.json(players));
        } catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };

    GetOne: express.RequestHandler =
    async (req, res, next) => {
        try {
            await Players
            .findById<IPlayer>(req.params.id)
            .then((player) => res.status(201)
            .json(player));
        } catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };

    Update: express.RequestHandler = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { title, first, last, 
                age, email, info } = req.body;
            await Players
            .findByIdAndUpdate<IPlayer>(id, {
                title, first, last, age, email, info
            })
            .then(() => res.status(201)
            .json("The Player was Updated!"));
        } catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };

    Delete: express.RequestHandler = async (req, res, next) => {
        try {
            await Players
            .findByIdAndDelete<IPlayer>(req.params.id)
            .then(() => res.status(201)
            .json("The Player was Deleted!"));
        } catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };
};

export const PLAYERS: PlayerClass = new PlayerClass();



