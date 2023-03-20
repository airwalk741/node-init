import fs from "fs";
import path from "path";

let config: any;

if (process.env.NODE_ENV !== "develop") {
  const serverPath = process.execPath.split("/");
  serverPath.pop();
  const configFileName = serverPath.join("/") + "/config/config.json";
  let rawdata: any = fs.readFileSync(configFileName);
  config = JSON.parse(rawdata);
} else {
  config = require(path.join(process.cwd(), "/config/config.json"));
}

export { config };
