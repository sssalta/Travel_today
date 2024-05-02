import { useContext } from "react";
import { AuthContext } from "../hocs/authContext";

export const useAuth = () => useContext(AuthContext);
