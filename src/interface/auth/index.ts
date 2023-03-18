export interface ILoginForm {
  username: string;
  password: string;
  keepLoggedIn: boolean;
}
export interface ILoginSchema extends ILoginForm {}

export interface ILogin {
  token: string;
  data?: string;
  email?: string;
}
