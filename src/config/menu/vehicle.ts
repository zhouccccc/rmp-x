import { AppCode } from "@tf/utils/commonConsts";
import packagesJSON from "../../../package.json";

export default [
  // 车辆规格
  {
    path: `/${AppCode.Vehicle}/vehicleSpecification/${packagesJSON.name}`,
    name: "vehicleModel",
    component: "/views/VehicleSpecs",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
  },
  // 车辆列表
  {
    path: `/${AppCode.Vehicle}/vehicleList/${packagesJSON.name}`,
    name: "vehicleList",
    component: "/views/VehicleList",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
  },
  // 故障
  {
    path: `/${AppCode.Vehicle}/faults/${packagesJSON.name}`,
    name: "vehicleFaults",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 车辆故障定义
      {
        path: `/${AppCode.Vehicle}/faults/faultDefinition/${packagesJSON.name}`,
        name: "vehicleFaultDefinition",
        component: "/views/VehicleFaultDefinition",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 车辆故障查询
      {
        path: `/${AppCode.Vehicle}/faults/faultQuery/${packagesJSON.name}`,
        name: "vehicleFaultQuery",
        component: "/views/VehicleFaultQuery",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },
  // 策略
  {
    path: `/${AppCode.Vehicle}/strategy/${packagesJSON.name}`,
    name: "vehicleStrategy",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 交通管制策略
      {
        path: `/${AppCode.Vehicle}/strategy/trafficControllStrategy/${packagesJSON.name}`,
        name: "trafficControllStrategy",
        component: "/views/TrafficControllStrategy",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 停车策略
      {
        path: `/${AppCode.Vehicle}/strategy/parkingStrategy/${packagesJSON.name}`,
        name: "parkingStrategy",
        component: "/views/ParkingStrategy",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },
];
