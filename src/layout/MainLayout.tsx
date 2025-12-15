import { useState, useMemo, type ComponentType } from "react";
import {
  useTabNavigation,
  NavigationProvider,
} from "@tf/ui/hooks/useTabNavigation";
import type { NavItem } from "@tf/types/types";
import CommonMainLayout from "@tf/ui/layouts/MainLayout";
import { LoadRouteView } from "@tf/ui/lazy/LazyRouteView";
import { buildSystemNav } from "@tf/utils/commonMenuUtil";
import useUserStore from "@tf/ui/stores/user.store";
import useMenuStore from "@tf/ui/stores/menu.store";
import allModulesMenu from "@/config/menu";

const MainLayout = () => {
  const currentUser = useUserStore((state) => state.currentUser);

  const [refreshKeys, setRefreshKeys] = useState<Record<string, number>>({});
  const saveMenuData = useMenuStore((state) => state.saveMenuData);

  /**
   * 将菜单配置转换为NavItem数组
   */
  const navItems: NavItem[] = useMemo(() => {
    const items: NavItem[] = [];
    const routerCopy = structuredClone(allModulesMenu);

    // 只有当用户存在时才初始化菜单
    if (currentUser) {
      return buildSystemNav(currentUser, routerCopy, saveMenuData);
    }
    return items;
  }, [currentUser]);
  const navigationState = useTabNavigation(navItems);
  const { activePath, openPages } = navigationState;

  function handleRefresh() {
    setRefreshKeys((prev) => ({
      ...prev,
      [activePath]: (prev[activePath] || 0) + 1,
    }));
  }

  return (
    <NavigationProvider
      value={{ ...navigationState, onRefresh: handleRefresh }}
    >
      <CommonMainLayout>
        {openPages.map((page) => (
          <div
            key={page.path}
            className={`flex-1 flex flex-col min-h-0 overflow-hidden relative h-full ${
              page.path === activePath ? "flex" : "hidden"
            }`}
          >
            <LoadRouteView
              viewPath={page.componentPath}
              routePath={page.path}
            />
          </div>
        ))}
        {openPages.length === 0 && (
          <div className="flex-1 flex items-center justify-center text-gray-300 text-sm">
            暂无打开页面
          </div>
        )}
      </CommonMainLayout>
    </NavigationProvider>
  );
};
export default MainLayout;
