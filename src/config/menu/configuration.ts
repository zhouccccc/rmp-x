import { AppCode } from "@tf/utils/commonConsts";
import packagesJSON from "../../../package.json";

export default [
  // 素材库
  {
    path: `/${AppCode.Configuration}/materialLibrary/${packagesJSON.name}`,
    name: "materialLibrary",
    component: "/views/MaterialLibrary",
    authority: ["ADMIN", "SUPERMANAGER"],
  },

  // Webhook
  {
    path: `/${AppCode.Configuration}/webHook/${packagesJSON.name}`, // WebHook
    name: "webHook",
    component: "/views/WebHook",
    authority: ["ADMIN", "SUPERMANAGER"],
  },

  // 参数列表
  {
    path: `/${AppCode.Configuration}/parameterList/${packagesJSON.name}`, // 参数列表
    name: "parameterList",
    component: "/views/SystemParameterList",
    authority: ["ADMIN", "SUPERMANAGER"],
  },
];
