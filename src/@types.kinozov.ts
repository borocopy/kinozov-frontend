export interface IUser {
  id: string,
  username: string
}

export interface IUserSignInDTO {
  email: string,
  password: string
}

export interface IUserSignUpDTO {
  username: string,
  email: string,
  password: string,
}
