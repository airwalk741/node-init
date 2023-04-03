import express from "express";
import { logger } from "src/middlewares/winston";

const router = express.Router();
const BASE_URL = "/api/test";

export default (app: any) => {
  router.get("/", (req, res) => {
    logger.info(`[GET] start ${BASE_URL}`);
  });

  router.post("/", (req, res) => {
    logger.info(`[POST] start ${BASE_URL}`);
  });

  router.put("/", (req, res) => {
    logger.info(`[PUT] start ${BASE_URL}`);
  });

  router.delete("/", (req, res) => {
    logger.info(`[DELETE] start ${BASE_URL}`);
  });

  app.use(BASE_URL, router);
};
