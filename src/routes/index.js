import RenderRouter from "src/routes/renders/index";
import APIRouter from "src/routes/apis/index";

export default (app) => {
  RenderRouter(app);
  APIRouter(app);
};
