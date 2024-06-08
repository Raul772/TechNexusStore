"use server"
import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { AuthContextType } from "./interfaces/AuthContextType";
import { ICredentials } from "./interfaces/ICredentials";
import { IUser } from "./interfaces/IUser";
import { STATUS } from "./interfaces/IStatus";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const useAuth = () => {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [status, setStatus] = useState<keyof typeof STATUS| null>("unauthenticated");

  const signin = async (credentials: ICredentials) => {

    try {
      const response = await axios.post(API_BASE_URL+'api/auth/signin', credentials);

      const { jwtToken, user } = response.data;
      localStorage.setItem("jwt", jwtToken);
      setUser(user);
      setStatus("authenticated");
    }
    catch (error) {
      // TODO
    }

    return true;
  }

  const signout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
    setStatus("unauthenticated");
  }


  return (
    <AuthContext.Provider value={{ status, user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
