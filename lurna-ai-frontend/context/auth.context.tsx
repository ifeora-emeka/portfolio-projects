'use client'
import firebase from "firebase/compat/app";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthState = {
  user: firebase.User | null;
  isLoading: boolean;
};

type AuthContextType = {
  authState: AuthState;
  setAuthState: (newState: AuthState) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
