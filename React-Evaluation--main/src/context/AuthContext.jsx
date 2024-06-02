// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    token: null,
    email: null,
  });

  const login = (token, email) => {
    setAuthState({ isAuthenticated: true, token, email });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, token: null, email: null });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
