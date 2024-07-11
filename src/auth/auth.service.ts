import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  singup() {
    return { msg: 'Im sign up' };
  }

  login() {
    return { msg: 'I login' };
  }
}
