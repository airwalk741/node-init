import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import https from "https";
import cors from "cors";
import { config } from "src/utils/config";
import db from "src//models";
import autoDB from "./models/orm";
import Routes from "src/routes/index";
import { logger } from "./middlewares/winston";
import { results } from "src/utils/index";

const app = express();

const {
  node: { port },
} = config;

const HTTP_PORT = port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", "src/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname));

app.use(cors());
Routes(app);

app.listen(HTTP_PORT, () => {
  // logger.info(`Server listening on port ${HTTP_PORT}`);
  console.log(`server is listening at \n-> \thttp://localhost:${port}`);
  if (Object.keys(results).length !== 0) {
    console.log(`-> \thttp://${results["en0"][0]}:${port}`);
  }
});

// const options = {
//   key: fs.readFileSync("certs/private.pem"),
//   cert: fs.readFileSync("certs/server.crt"),
// };

// const httpsServer = https.createServer(options, app);

// httpsServer.listen(HTTP_PORT, async () => {
//   // await autoDB.run();
//   await db.sequelize.sync(); // DB 연결
//   logger.info(`Server listening on port ${HTTP_PORT}`);
// });