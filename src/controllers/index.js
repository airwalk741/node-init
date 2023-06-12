import db from "src/models/index";
import _ from "lodash";
import { Op } from "sequelize";
import { Request, Response, NextFunction } from "express";
import { logger } from "src/middlewares/winston";

const BASE_URL = "/api/test";

///////////////////////////////////////////////////////////////////////////////////////////
// api

const createApi = async (req, res) => {};

const readApi = async (req, res) => {};

const updateApi = async (req, res) => {};

const deleteApi = async (req, res) => {};

export { createApi, readApi, updateApi, deleteApi };
