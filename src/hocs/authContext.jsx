import { createContext, useEffect, useState } from "react";


const authContextInitialValues= {
  user: null,
  token: null,
  isLoading: false,
  setUser: null,
};

export const AuthContext = createContext(authContextInitialValues);

const AuthProvider = ({ children }) => {
  const newUser = localStorage.getItem("user");
  const [user, setUser] = useState(
    newUser
      ? JSON.parse(newUser)
      : {
          username: "",
          email: "",
          password: "",
        }
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ ...authContextInitialValues, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
