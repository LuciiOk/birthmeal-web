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
    const { access_token, user: userResponse } = response.data;
    if (access_token && userResponse) {
      localStorage.setItem("token", access_token);
      setToken(access_token);
      setUser(userResponse);
      setIsAuth(true);
    }
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const userAuth = async () => {
    try {
      const localToken = localStorage.getItem("token");
      const localUser = localStorage.getItem("user");
      const { data } = await AxiosInstance.get("auth/verify-token");
      if (data) {
        setToken(localToken);
        setUser(JSON.parse(localUser));
        setIsAuth(true);
      } else {
        logout();
      }
    } catch (error) {
      logout();
      console.log(error);
    }
  };

  React.useEffect(() => {
    userAuth();
  }, []);

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
