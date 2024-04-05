import express, { Express, Request, Response } from "express";
import cors from "cors";
const port = 5000;

const app: Express = express();

const allowedOrigins = ["http://localhost:3000", "http://localhost:5000"];

//options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: allowedOrigins,
  preflightContinue: false,
};

//use cors middleware
app.use(cors(options));

//add your routes

//enable pre-flight
app.options("*", cors(options));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/api/home", (req: Request, res: Response) => {
  res.send({ message: "Home route" });
});

app.get("/test", (req: Request, res: Response) => {
  res.send("test route 2");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
