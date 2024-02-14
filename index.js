import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import https from "https";
import cors from "cors";
import { config } from "src/utils/config";
import db from "src//models";
import autoDB from "src/models/orm";
import Routes from "src/routes/index";
import { logger } from "src/middlewares/winston";
import { results } from "src/utils/index";
import path from "path";

const app = express();

const {
  node: { port },
} = config;

const HTTP_PORT = port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname));

app.use(cors());
Routes(app);

app.listen(HTTP_PORT, () => {
  // logger.info(`Server listening on port ${HTTP_PORT}`);
  console.log(`server is listening at \n-> \thttp://localhost:${port}`);
  try {
    if (Object.keys(results).length !== 0) {
      for (let key of Object.keys(results)) {
        console.log(`-> \thttp://${results[key][0]}:${port}`);
      }
    }
  } catch (e) {
    console.log(e);
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
