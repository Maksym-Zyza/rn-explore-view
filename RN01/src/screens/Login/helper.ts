import { NavRoutes, NavigationProps } from "../../types/navigation";

export type FormState = {
  email: string;
  password: string;
  login: string;
};

export const validateForm = (
  formState: FormState,
  navigation?: NavigationProps
): string => {
  let error = "";

  if (!formState.password.trim()) {
    error = "Password is required.";
  } else if (formState.password.length < 6) {
    error = "Password must be at least 6 characters.";
  }

  if (!formState.email.trim()) {
    error = "Email is required.";
  } else if (
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(formState.email)
  ) {
    error = "Invalid email format.";
  }

  if (!formState.login.trim()) {
    error = "Login is required.";
    navigation && navigation.navigate(NavRoutes.Registration);
  } else if (formState.login.length < 3) {
    error = "Login must be at least 3 characters.";
  }

  return error;
};
