import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? true : false;
  });

  function login(token, userId) {
    setIsAuth(true);
    localStorage.setItem("token", token);
    localStorage.setItem("user", userId);
  }

  function getToken() {
    const storedToken = localStorage.getItem("token");
    return storedToken;
  }

  function getUser() {
    const user = localStorage.getItem("user");
    return user;
  }

  function logout() {
    setIsAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, getUser, getToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
