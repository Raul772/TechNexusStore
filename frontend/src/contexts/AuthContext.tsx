import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { AuthContextType } from "./interfaces/AuthContextType";
import { ICredentials } from "./interfaces/ICredentials";
import { IUser } from "./interfaces/IUser";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(null);

  const signin = async (credentials: ICredentials) => {
    try {
      const response = await axios.post('/api/login', credentials)
      const { token } = response.data;

      localStorage.setItem("jwt", token);
      setUser(token);
    }
    catch (error) {
      // TODO
    }
  }

  const signout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
  }


  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
