import { create } from 'zustand';
import { isNull } from '@remote/common/commonUtils';
import createMonitorSlice from '@remote/common/stores/createMonitorSlice';

const useMonitorStore = create((set, get, store) => ({
  ...createMonitorSlice(store),
}));
export default useMonitorStore;
window.useMonitorStore = useMonitorStore;

export function resetStore() {
  useMonitorStore.setState(useMonitorStore.getInitialState());
}

export function resetMenu() {
  useMonitorStore.setState(() => ({
    menuKey: null,
    subMenuKey: null,
    subMenu: null,
  }));
}

export function updateMenuKey(v) {
  useMonitorStore.setState(() => ({
    menuKey: v,
  }));
}

export function updateSubMenuKey(v) {
  useMonitorStore.setState(() => ({
    subMenuKey: v,
  }));
}

export function updateSubMenu(v) {
  useMonitorStore.setState(() => ({
    subMenu: v,
  }));
}

/**
 * 切换顶部操作面板显示
 * @param {string} key - 状态key
 * @param {Object} [value] - 指定值
 */
export function switchOperationBarVisible(key, value) {
  resetMenu();
  const { operationBarState: initState } = useMonitorStore.getInitialState();
  useMonitorStore.setState((state) => {
    const preState = state.operationBarState[key];
    const operationBarState = { ...initState };
    if (!isNull(value)) {
      operationBarState[key] = value;
    } else {
      operationBarState[key] = !preState;
    }
    return { operationBarState };
  });
}

export function closeOperationBar() {
  const { operationBarState } = useMonitorStore.getInitialState();
  useMonitorStore.setState((state) => {
    return {
      ...state,
      operationBarState: structuredClone(operationBarState),
    };
  });
}
