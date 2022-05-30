import { OverlayListSelect } from "~~/.nuxt/components";

const useOverlay = () => {
  const componentList = shallowRef([OverlayListSelect]);

  return {
    open: componentList.value.length > 0,
    componentList
  }
};

export default useOverlay;
