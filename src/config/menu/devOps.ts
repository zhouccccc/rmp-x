import { AppCode } from "@tf/utils/commonConsts";
import packagesJSON from "../../../package.json";

export default [
  // 系统日志
  {
    path: `/${AppCode.DevOps}/systemLogWarehouse/${packagesJSON.name}`, // 系统日志
    name: "systemLogWarehouse",
    component: "/views/IntegrationLogManagement",
    authority: ["ADMIN", "SUPERMANAGER"],
  },
  // 问题反馈
  {
    path: `/${AppCode.DevOps}/problemFeedback/${packagesJSON.name}`, // 问题反馈
    name: "problemFeedback",
    component: "/views/ProblemFeedback",
    authority: ["ADMIN", "SUPERMANAGER"],
  },
  // 操作日志
  {
    path: `/${AppCode.DevOps}/operationLog/${packagesJSON.name}`, // 操作日志
    name: "operationLog",
    component: "/views/OperationLog",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
  },
  // 实用工具
  {
    path: `/${AppCode.DevOps}/utilBox/${packagesJSON.name}`, // 实用工具
    name: "utilBox",
    component: "/views/UtilBox",
    authority: ["ADMIN", "SUPERMANAGER", "MANAGER"],
  },
  // 数据迁移
  {
    path: `/${AppCode.DevOps}/dataMigration/${packagesJSON.name}`, // 数据迁移
    name: "dataMigration",
    component: "/views/DataMigration",
    authority: ["ADMIN", "SUPERMANAGER"],
  },
];
