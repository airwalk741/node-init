import express from "express";
import { config } from "src/js/config";

const app = express();

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

const {
  node: { port },
} = config;

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
