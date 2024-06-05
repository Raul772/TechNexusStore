"use server"
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType } from "./interfaces/AuthContextType";
import { ICredentials } from "./interfaces/ICredentials";
import { IUser } from "./interfaces/IUser";
import { STATUS } from "./interfaces/IStatus";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [status, setStatus] = useState<keyof typeof STATUS | null>("unauthenticated");


  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      setStatus("authenticated");
    }
  }, [])





  const signin = async (credentials: ICredentials) => {


    const response = await axios.post('http://localhost:3000/api/auth/signin', credentials);

    const { jwtToken, user } = response.data;
    localStorage.setItem("jwt", jwtToken);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setStatus("authenticated");



    return response.status;
  }

  const signout = () => {
    localStorage.removeItem("user");
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
