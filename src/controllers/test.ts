import db from "src/models/index";
import _ from "lodash";
import { Op } from "sequelize";
import { Request, Response, NextFunction } from "express";
import { logger } from "src/middlewares/winston";

const BASE_URL = "/api/test";

///////////////////////////////////////////////////////////////////////////////////////////
// api

const createApi = async (req: Request, res: Response) => {};

const readApi = async (req: Request, res: Response) => {};

const updateApi = async (req: Request, res: Response) => {};

const deleteApi = async (req: Request, res: Response) => {};

export { createApi, readApi, updateApi, deleteApi };
