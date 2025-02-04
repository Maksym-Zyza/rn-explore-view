import { useState, useEffect } from "react";
import { useCameraPermissions, PermissionResponse } from "expo-camera";

export const useCameraPermission = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (permission) {
      setIsLoading(false);
    }
  }, [permission]);

  return {
    isLoading,
    permission,
    requestPermission,
  };
};
