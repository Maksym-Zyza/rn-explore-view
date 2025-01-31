import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useAppContext } from "./useAppContext";

export const useHideTabBar = () => {
  const { setTabBarShow } = useAppContext();

  useFocusEffect(
    useCallback(() => {
      setTabBarShow(false);
      return () => setTabBarShow(true);
    }, [setTabBarShow])
  );
};
