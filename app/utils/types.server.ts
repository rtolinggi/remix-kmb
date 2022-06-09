export interface RegisterForm {
  email: string;
  passwordHash: string;
  fullname: string;
  avatar: string;
  phone: string;
  nik: number;
}

export interface LoginForm {
  email: string;
  passwordHash: string;
}
