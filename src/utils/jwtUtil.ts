import _ from 'lodash';
import { crypto } from './crypto';
import jws, { Algorithm, Header} from 'jws';


class JwtUtil {
  
  issueToken(payload: Record<string, unknown>, header: Header= {alg:'RS256'}) {
    const privateKey = crypto.privateKey;
    return jws.sign({header: header, payload, privateKey});
  }

  verifyToken(token: string, algorithm: Algorithm ='RS256') {
    const publicKey = crypto.publicKey;
    return jws.verify(token, algorithm, publicKey);
  }

  decodeToken(token: string, options: jws.DecodeOptions = { json: true }) {
    return jws.decode(token, options);
  }

  decodeJwt(authorization: string, algorithm: Algorithm ='RS256') {
    const authStr = _.trim(authorization);
    let token: any;
    let tokenStr = authStr;
    if (authStr.startsWith('Bearer ')) {
      tokenStr = authStr.slice(7, authStr.length);
    }
    if (!_.isNil(tokenStr)) {
      let verify =  this.verifyToken(tokenStr, algorithm);
       token = this.decodeToken(tokenStr);
    }
    return token;
  }
}

export const jwtUtil = new JwtUtil();
