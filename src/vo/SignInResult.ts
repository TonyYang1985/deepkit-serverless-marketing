import {MinLength, MaxLength } from '@deepkit/type';
import { UserVo } from './UserVo';

// export class  SignInResult {
//     token!: string;
//     user!: UserVo;
//     redirect!: string;
// }

export type SignInResult ={
    token: string;
    user: UserVo;
    redirect: string;
  }