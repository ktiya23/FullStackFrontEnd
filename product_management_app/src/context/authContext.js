import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (token) => {
    localStorage.setItem("token", token);
    setUser({ token });
  };

  const logout = async (token) => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const isAuthenticated = () => !!localStorage.getItem("token");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser({ token });
  },[]);

  return(
    <AuthContext.Provider value={{user , login , logout , isAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
