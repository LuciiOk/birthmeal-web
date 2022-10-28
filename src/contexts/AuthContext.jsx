import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const login = (user) => {
    setIsAuth(true);
    setUser(user);
    setToken(user.token);
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