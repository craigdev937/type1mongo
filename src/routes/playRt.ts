import express from "express";
import { PLAYERS } from "../controllers/playCon";

export const playRt: express.Router = express.Router();
    playRt.post("/", PLAYERS.Create);
    playRt.get("/", PLAYERS.FetchAll);
    playRt.get("/:id", PLAYERS.GetOne);
    playRt.put("/:id", PLAYERS.Update);
    playRt.delete("/:id", PLAYERS.Delete);


