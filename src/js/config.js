import fs from "fs";
import path from "path";
// const serverPath = process.execPath.split("/");
// serverPath.pop();
// const configFileName = serverPath.join("/") + "/config/config.json";
// let rawdata = fs.readFileSync(configFileName);
// const config = JSON.parse(rawdata);

const config = require(path.join(process.cwd(), "/config/config.json"));

export { config };
