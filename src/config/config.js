import fs from "fs";

// const serverPath = process.execPath.split("/");
// serverPath.pop();
// const configFileName = serverPath.join("/") + "/config/config.json";
// let rawdata = fs.readFileSync(configFileName);
// const config = JSON.parse(rawdata);

import config from "src/config/config.json";

export { config };
