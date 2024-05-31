export interface IUser{
  name: string;
  image?: string | null;
  email: string;
  id?: string;
  emailVerified?: boolean;
}