import express, {Express, Request, Response} from "express";

const app: Express = express();
const port = 3000;

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, worlsddsdd!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});