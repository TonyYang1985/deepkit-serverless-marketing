import { crypto } from './crypto';

export function getSignedPassword(password: string) {
    return crypto.sha1Hmac(`${password}${crypto.privateKey}`);
  }