import { TouchableOpacity } from "react-native";
import LogoutIcon from "../icons/LogoutIcon";
import { logoutDB } from "../utils/auth";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => logoutDB(dispatch)}>
      <LogoutIcon />
    </TouchableOpacity>
  );
};

export default LogoutButton;
