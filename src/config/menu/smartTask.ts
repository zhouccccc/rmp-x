import { AppCode } from "@tf/utils/commonConsts";
import packagesJSON from "../../../package.json";

export default [
  // 订单
  {
    path: `/${AppCode.SmartTask}/order/${packagesJSON.name}`,
    name: "order",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 订单池
      {
        path: `/${AppCode.SmartTask}/order/orderPool/${packagesJSON.name}`,
        name: "orderPool",
        component: "/views/OrderPool",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 订单历史
      {
        path: `/${AppCode.SmartTask}/order/orderHistory/${packagesJSON.name}`,
        name: "orderHistory",
        component: "/views/OrderHistory",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 订单流程
      {
        path: `/${AppCode.SmartTask}/order/orderFlow/${packagesJSON.name}`,
        name: "orderFlow",
        component: "/views/OrderFlow",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 订单策略
      {
        path: `/${AppCode.SmartTask}/order/orderStrategy/${packagesJSON.name}`,
        name: "orderStrategy",
        component: "/views/OrderStrategy",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },

  // 车辆任务
  {
    path: `/${AppCode.SmartTask}/vehicleTask/${packagesJSON.name}`,
    name: "vehicleTask",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 车辆任务池
      {
        path: `/${AppCode.SmartTask}/vehicleTask/vehicleTaskPool/${packagesJSON.name}`,
        name: "vehicleTaskPool",
        component: "/views/VehicleTaskPool",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 车辆任务流程
      {
        path: `/${AppCode.SmartTask}/vehicleTask/vehicleTaskFlow/${packagesJSON.name}`,
        name: "vehicleTaskFlow",
        component: "/views/VehicleTaskFlow",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 车辆任务历史
      {
        path: `/${AppCode.SmartTask}/vehicleTask/vehicleTaskHistory/${packagesJSON.name}`,
        name: "vehicleTaskHistory",
        component: "/views/VehicleTaskHistory",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 车辆任务策略
      {
        path: `/${AppCode.SmartTask}/vehicleTask/vehicleTaskStrategy/${packagesJSON.name}`,
        name: "vehicleTaskStrategy",
        component: "/views/VehicleTaskStrategy",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 车辆任务限流均衡
      {
        path: `/${AppCode.SmartTask}/vehicleTask/vehicleTaskLimitEqualizer/${packagesJSON.name}`,
        name: "vehicleTaskLimitEqualizer",
        component: "/views/VehicleTaskLimitEqualizer",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },

  // 设备任务
  {
    path: `/${AppCode.SmartTask}/deviceTask/${packagesJSON.name}`,
    name: "deviceTask",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 设备任务池
      {
        path: `/${AppCode.SmartTask}/deviceTask/deviceTaskPool/${packagesJSON.name}`,
        name: "deviceTaskPool",
        component: "/views/DeviceTaskPool",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 设备任务历史
      {
        path: `/${AppCode.SmartTask}/deviceTask/deviceTaskHistory/${packagesJSON.name}`,
        name: "deviceTaskHistory",
        component: "/views/DeviceTaskHistory",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 设备任务策略
      {
        path: `/${AppCode.SmartTask}/deviceTask/deviceTaskStrategy/${packagesJSON.name}`,
        name: "deviceTaskStrategy",
        component: "/views/DeviceTaskStrategy",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },

  // 下发
  {
    path: `/${AppCode.SmartTask}/dispatch/${packagesJSON.name}`,
    name: "dispatch",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 快捷下发
      {
        path: `/${AppCode.SmartTask}/dispatch/quickDispatch/${packagesJSON.name}`,
        name: "quickDispatch",
        component: "/views/QuickDispatch",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 快捷接口
      {
        path: `/${AppCode.SmartTask}/dispatch/quickInterface/${packagesJSON.name}`,
        name: "quickInterface",
        component: "/views/QuickInterface",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 触发器
      {
        path: `/${AppCode.SmartTask}/dispatch/trigger/${packagesJSON.name}`,
        name: "trigger",
        component: "/views/Trigger",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 接口请求库
      {
        path: `/${AppCode.SmartTask}/dispatch/interfaceRequestLibrary/${packagesJSON.name}`,
        name: "interfaceRequestLibrary",
        component: "/views/InterfaceRequestLibrary",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },
];
