import { AppCode } from "@tf/utils/commonConsts";

import Map from "./map";
import DevOps from "./devOps";
import Vehicle from "./vehicle";
import SmartTask from "./smartTask";
import Configuration from "./configuration";
import ResourceManager from "./resourceManage";

export default [
  {
    code: AppCode.Map,
    menu: Map,
  },
  {
    code: AppCode.SmartTask,
    menu: SmartTask,
  },
  {
    code: AppCode.Vehicle,
    menu: Vehicle,
  },
  {
    code: AppCode.ResourceManage,
    menu: ResourceManager,
  },
  {
    code: AppCode.Configuration,
    menu: Configuration,
  },
  {
    code: AppCode.DevOps,
    menu: DevOps,
  },
];
