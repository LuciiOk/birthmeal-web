import React, { createContext } from "react";
import AxiosInstance from "../utils/AxiosIntance";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const login = async (email, password) => {
    try {
      const userData = {
        email,
        password,
      };
      const response = await AxiosInstance.post("auth/admin/login", userData);
      const { token, user } = response.data;
      setToken(token);
      setUser(user);
      setIsAuth(true);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
