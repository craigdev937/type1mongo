import mongoose from "mongoose";

export interface IPlayer extends mongoose.Document {
    title: string, first: string,
    last: string, age: number,
    info: string
};

const PlayerSchema: mongoose.Schema = new mongoose.Schema({
    title: { type: String }, first: { type: String },
    last: { type: String }, age: { type: Number },
    email: { type: String }, info: { type: String }
});

export const Players = 
    mongoose.model<IPlayer>("Players", PlayerSchema);


