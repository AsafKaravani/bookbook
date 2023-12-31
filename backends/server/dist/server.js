"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, worlsddsdd!');
});
app.get('/hi', (req, res) => {
    res.send('holaaaa');
});
app.get('/hd', (req, res) => {
    res.send('hosdsdlaaaa');
});
// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
