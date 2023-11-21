import fs from "fs";
import path from "path";
import os from "os";

let config;

let configFileName;

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

let rawdata = fs.readFileSync(configFileName);
config = JSON.parse(rawdata);

export const returnConfigData = () => {
  let config;
  let configFileName;

  if (process.env.NODE_ENV !== "develop") {
    const serverPath = process.execPath.split("/");
    serverPath.pop();
    configFileName = serverPath.join("/") + "/config/config.json";
  } else {
    configFileName = path.join(process.cwd(), "/config/config.json");
  }

  let rawdata = fs.readFileSync(configFileName);
  config = JSON.parse(rawdata);
  return config;
};

export { config };
