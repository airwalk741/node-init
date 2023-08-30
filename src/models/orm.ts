import { returnConfig } from "src/utils/config";
import { SequelizeAuto } from "sequelize-auto";

const config = returnConfig();

const {
  database: { username, password, database, host, dialect, port, pool },
} = config;

const autoDB: any = new SequelizeAuto(database, username, password, {
  host,
  port,
  dialect,
  directory: "src/models/output",
  lang: "ts",
} as any);

export default autoDB;
