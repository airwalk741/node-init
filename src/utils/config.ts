import fs from "fs";
import path from "path";
import os from "os";

export const returnConfig = () => {
  let config: any;
  let configFileName: string;

  if (process.env.NODE_ENV !== "develop") {
    let serverPath = process.execPath.split("/");

    if (os.type().includes("Windows")) {
      serverPath = process.execPath.split("\\");
    }

    serverPath.pop();
    configFileName = serverPath.join("/") + "/config/config.json";
  } else {
    configFileName = path.join(process.cwd(), "/config/config.json");
  }

  let rawdata: any = fs.readFileSync(configFileName);
  config = JSON.parse(rawdata);

  return config;
};
