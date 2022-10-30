import React, { createContext } from "react";
import AxiosInstance from "../utils/AxiosIntance";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const login = async (email, password) => {
    const userData = {
      email,
      password,
    };
    const response = await AxiosInstance.post("auth/admin/login", userData);
    const { access_token, user } = response.data;
    setToken(access_token);
    setUser(user);
    setIsAuth(true);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    setToken(null);
  };

  const userAuth = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      setToken(token);
      setUser(user);
      setIsAuth(true);
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setToken(token);
      setUser(JSON.parse(user));
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        token,
        login,
        logout,
        userAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
