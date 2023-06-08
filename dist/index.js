"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const midError_1 = require("./middleware/midError");
const playRt_1 = require("./routes/playRt");
(async () => {
    await mongoose_1.default.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB is now Connected!"))
        .catch((error) => console.log(error));
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)());
    // CORS
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
            return res.status(200).json({ "status message": "OK" });
        }
        ;
        next();
    });
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    app.use((0, morgan_1.default)("dev"));
    app.use("/", playRt_1.playRt);
    app.use(midError_1.ERR.errorHandler);
    app.use(midError_1.ERR.notFound);
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    });
})();
