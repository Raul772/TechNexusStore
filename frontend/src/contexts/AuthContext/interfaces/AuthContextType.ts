import { ICredentials } from "./ICredentials";
import { IUser } from "./IUser";

export interface AuthContextType{
  status: string | null;
  user: IUser | null;
  signin: (credentials: ICredentials) => Promise<any>;
  signout: () => void;
}