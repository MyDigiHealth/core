import express from "express";
import { PORT } from "./config";

const app = express();

app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
