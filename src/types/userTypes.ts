export interface IUser {
  username: string
  given_name: string
  family_name: string
  email: string
  phone_number: string
  phone_number_verified: boolean
  email_verified: boolean
}

export interface ISession {
  token: string
  user: IUser
}

export interface ILoginResponse {
  username: string
  given_name: string
  family_name: string
  attributes: {
    given_name: string
    family_name: string
    email: string
    email_verified: boolean
    phone_number: string
    phone_number_verified: boolean
    role?: string
    transfer_phone?: string
  }
  signInUserSession: {
    accessToken: { jwtToken: string }
    idToken: { jwtToken: string }
    refreshToken: { token: string }
  }
}

export interface ILoginCredentials {
  usernameField: string
  password: string
}

export enum ResetSuccessEnum {
  updateProfile = 'updateProfile',
}
