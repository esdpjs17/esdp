export interface IUser {
  email: string;
  password: string;
  token: string;
  role: string;
  displayName: string;
  avatar: string | null;
}