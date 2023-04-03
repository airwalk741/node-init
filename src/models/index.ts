import { config } from "src/ts/config";
import { Sequelize } from "sequelize";

const {
  database: { username, password, database, host, dialect, port, pool },
} = config;
const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
  logging: false,
  timezone: "+09:00",
});

const db = {
  // ...initModels(sequelize),
  Sequelize: Sequelize,
  sequelize: sequelize,
};

export default db;

export { sequelize };
