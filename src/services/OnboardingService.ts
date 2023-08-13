import { LoggerInterface } from '@deepkit/logger';
import { MySQLDatabase } from '../database';
import { User } from '../entities';
import { SignInResult, SignInWithPassword, UserToken } from '../vo';
import { getSignedPassword } from '../utils/tools';
import { jwtUtil } from '../utils/jwtUtil';
import _ from 'lodash';
import { id } from '../utils/IdGenerator';
import { BizError } from '../utils/BizError';
import { ErrorKeys } from '../utils/ValidationErrorMsgs';

export class OnboardingService {

  constructor(protected logger: LoggerInterface, protected database: MySQLDatabase) { }

  async signInWithPassword(signIn: SignInWithPassword) {
    const crpPwd = getSignedPassword(signIn.password);
    const user = await this.database.query(User).filter({ name: signIn.name, password: crpPwd }).findOneOrUndefined();
    if (user) {
      return await this.issueToken(user);
    } else {
      throw new BizError(ErrorKeys.user.emailOrPwdWrong);
    }
  }

  async issueToken(user: User) {

    const jwtid = id(20);
    // main agent  & sub  agent 
    const tokenData: UserToken = {uid: user.id,jwtid: jwtid};
    const token = await jwtUtil.issueToken(tokenData);
    const result : SignInResult = {token: token,user:_.omit(user,['password']) ,redirect:''};
    this.logger.info("result ",JSON.stringify(result));
    return result;
  }

}