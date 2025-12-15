import { createBrowserRouter } from "react-router-dom";
import lazyComponent from "@tf/ui/lazy/lazyComponent";

// 创建懒加载组件
const LoginPage = lazyComponent(() => import("@tf/views/Login"));
const SystemAuthError = lazyComponent(
  () => import("@tf/views/SystemAuthError")
);
const MainLayout = lazyComponent(() => import("@/layout/MainLayout"));

const routerConfig = [
  // ✅ 1. 登录页 - 现在可以直接使用路径加载
  {
    path: "/login",
    element: <LoginPage saveCurrentUser={() => {}} />,
  },
  // ✅ 2. 权限错误页
  {
    path: "/authError",
    element: <SystemAuthError />,
  },
  // ✅ 3. 主布局 - 支持嵌套路由
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // 动态路由将在运行时由 MainLayout 根据菜单配置生成
      // 这里使用通配符捕获所有路径
      {
        path: "*",
        element: null, // MainLayout 内部会处理渲染
      },
    ],
  },
];
if (!window.isProductionEnv || window.isDebugMode) {
  //
}

export default createBrowserRouter(routerConfig);
