import { Sequelize, Dialect } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const dialect = process.env.DB_DIALECT as Dialect; 

const sequelize = new Sequelize({
  dialect,
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "willy1234",
  database: process.env.DB_NAME || "postgres",
  logging: false,
});

export default sequelize;
