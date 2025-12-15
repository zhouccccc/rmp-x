import { AppCode } from "@tf/utils/commonConsts";
import packagesJSON from "../../../package.json";

export default [
  // 储位
  {
    path: `/${AppCode.ResourceManage}/resource/storage/${packagesJSON.name}`,
    name: "storage",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 储位规格
      {
        path: `/${AppCode.ResourceManage}/resource/storage/storageModel/${packagesJSON.name}`,
        name: "storageModel",
        component: "/views/StorageModel",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 储位管理
      {
        path: `/${AppCode.ResourceManage}/resource/storage/storageManagement/${packagesJSON.name}`,
        name: "storageManagement",
        component: "/views/StorageManagement",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 储位策略
      {
        path: `/${AppCode.ResourceManage}/resource/storage/storageStrategy/${packagesJSON.name}`,
        name: "storageStrategy",
        component: "/views/StorageStrategy",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },

  // 载具
  {
    path: `/${AppCode.ResourceManage}/resource/load/${packagesJSON.name}`,
    name: "load",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 载具规格
      {
        path: `/${AppCode.ResourceManage}/resource/load/loadModel/${packagesJSON.name}`,
        name: "loadModel",
        component: "/views/LoadModel",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 载具列表
      {
        path: `/${AppCode.ResourceManage}/resource/load/loadList/${packagesJSON.name}`,
        name: "loadList",
        component: "/views/LoadList",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 载具流转记录
      {
        path: `/${AppCode.ResourceManage}/resource/load/loadTransferRecord/${packagesJSON.name}`,
        name: "loadTransferRecord",
        component: "/views/LoadTransferRecord",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },

  // 充电桩
  {
    path: `/${AppCode.ResourceManage}/resource/charge/${packagesJSON.name}`,
    name: "charge",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 充电桩规格
      {
        path: `/${AppCode.ResourceManage}/resource/charge/chargerModel/${packagesJSON.name}`,
        name: "chargerModel",
        component: "/views/ChargerModel",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 充电桩列表
      {
        path: `/${AppCode.ResourceManage}/resource/charge/chargerList/${packagesJSON.name}`,
        name: "chargerList",
        component: "/views/ChargerList",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 充电桩故障查询
      {
        path: `/${AppCode.ResourceManage}/resource/charge/chargerFaultQuery/${packagesJSON.name}`,
        name: "chargerFaultQuery",
        component: "/views/ChargerFaultQuery",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 充电策略
      {
        path: `/${AppCode.ResourceManage}/resource/charge/chargingStrategy/${packagesJSON.name}`,
        name: "chargingStrategy",
        component: "/views/ChargingStrategy",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },

  // 设备
  {
    path: `/${AppCode.ResourceManage}/resource/device/${packagesJSON.name}`,
    name: "device",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 设备规格
      {
        path: `/${AppCode.ResourceManage}/resource/device/deviceModel/${packagesJSON.name}`,
        name: "deviceModel",
        component: "/views/DeviceModel",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 控制器列表
      {
        path: `/${AppCode.ResourceManage}/resource/device/controllerList/${packagesJSON.name}`,
        name: "controllerList",
        component: "/views/ControllerList",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 设备列表
      {
        path: `/${AppCode.ResourceManage}/resource/device/deviceList/${packagesJSON.name}`,
        name: "deviceList",
        component: "/views/DeviceList",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 设备故障查询
      {
        path: `/${AppCode.ResourceManage}/resource/device/deviceFaultQuery/${packagesJSON.name}`,
        name: "deviceFaultQuery",
        component: "/views/DeviceFaultQuery",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 设备模拟参数
      {
        path: `/${AppCode.ResourceManage}/resource/device/deviceSimulateParameter/${packagesJSON.name}`,
        name: "deviceSimulateParameter",
        component: "/views/DeviceSimulateParameter",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },

  // 其他
  {
    path: `/${AppCode.ResourceManage}/resource/other/${packagesJSON.name}`,
    name: "other",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
    children: [
      // 资源分组绑定
      {
        path: `/${AppCode.ResourceManage}/resource/other/resourceGroupBinding/${packagesJSON.name}`,
        name: "resourceGroupBinding",
        component: "/views/ResourceGroupBinding",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
      // 自定义数据源
      {
        path: `/${AppCode.ResourceManage}/resource/other/customDataSource/${packagesJSON.name}`,
        name: "customDataSource",
        component: "/views/CustomDataSource",
        authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
      },
    ],
  },
];
