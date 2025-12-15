import { createRoot } from "react-dom/client";
import { systemCheck } from "@tf/utils/systemUtils";
import { systemInitConfig } from "@tf/utils/systemUtils";

import packageJson from "../package.json";
import devApi from "./api";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// 先检查运行环境
systemCheck();

(async () => {
  // 处理接口请求路径
  let defaultAPI: Record<string, string> = {};
  if (window.isProductionEnv && !window.isDebugMode) {
    const nameSpacesInfo = window.localStorage.getItem("nameSpacesInfo");
    if (nameSpacesInfo) {
      defaultAPI = JSON.parse(nameSpacesInfo);
    }
  } else {
    defaultAPI = devApi;
  }
  await systemInitConfig(defaultAPI, packageJson.name);
  createRoot(rootElement).render(<App />);
})();
