import React, { createContext } from "react";
import AxiosInstance from "../utils/AxiosIntance";
import toast from 'react-hot-toast';

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
      const response = await AxiosInstance.post("auth/admindsf/login", userData);
      const { access_token, user } = response.data;
      setToken(access_token);
      setUser(user);
      setIsAuth(true);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
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
