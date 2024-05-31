import { ICredentials } from "./ICredentials";
import { IUser } from "./IUser";

export interface AuthContextType{
  user: IUser | null;
  signin: (credentials: ICredentials) => void;
  signout: () => void;
}