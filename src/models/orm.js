import { config } from "src/js/config";
import { SequelizeAuto } from "sequelize-auto";

const {
  database: { username, password, database, host, dialect, port, pool },
} = config;

const autoDB = new SequelizeAuto(database, username, password, {
  host,
  port,
  dialect,
  directory: "src/models/output",
});

export default autoDB;
