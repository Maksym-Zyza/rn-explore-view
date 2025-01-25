import { useContext } from "react";
import AppContext from "../context/AppContext/AppContext";

export const useAppContext = () => useContext(AppContext);
