import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { useShallow } from "zustand/shallow";

import useUserStore from "@tf/ui/stores/user.store";
import useGlobalStore from "@tf/ui/stores/global.store";
import { useSystemInit } from "@tf/ui/hooks/useSystemInit";

import router from "@/config/router.tsx";

const globLocale = import.meta.glob("/node_modules/@tf/i18n/*/index.js", {
  import: "default",
}) as Record<string, () => Promise<Record<string, string>>>;

export default function App() {
  const { antdLocale, saveSysAuthInfo, updateAntdLocale, saveSystemLanguage } =
    useGlobalStore(
      useShallow((state) => ({
        antdLocale: state.antdLocale,
        saveSysAuthInfo: state.saveSysAuthInfo,
        updateAntdLocale: state.updateAntdLocale,
        saveSystemLanguage: state.saveSystemLanguage,
      }))
    );

  const { saveCurrentUser } = useUserStore(
    useShallow((state) => ({
      saveCurrentUser: state.saveCurrentUser,
    }))
  );

  // 使用 router.navigate 代替 useNavigate() hook
  const { initDone } = useSystemInit({
    globLocale,
    navigate: router.navigate,
    actions: {
      saveSysAuthInfo,
      saveSystemLanguage,
      updateAntdLocale,
      saveCurrentUser,
    },
  });

  if (initDone) {
    return (
      <ConfigProvider locale={antdLocale}>
        <RouterProvider router={router} />
      </ConfigProvider>
    );
  }
  return <div>loading...</div>;
}
