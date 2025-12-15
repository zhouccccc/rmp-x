import { create } from 'zustand';
import createPlanningSlice from '@remote/common/stores/createPlanningSlice';
import useGlobalStore from '@/stores/global.store';

const useEditorStore = create((set, get, store) => ({
  ...createPlanningSlice(store, useGlobalStore),
}));
export default useEditorStore;
window.useEditorStore = useEditorStore;
