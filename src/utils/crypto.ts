import { createHash, createHmac } from 'crypto';
import { readFileSync } from 'fs';


interface KeyCache {
    privateKey?: string;
    publicKey?: string;
  }
  
  class Crypto {
    private static readonly keyCache: KeyCache = {};
  
    md5(input: string) {
      const md5 = createHash('md5');
      return md5.update(input).digest('hex');
    }
    
    sha1Hmac(input: string): string {
      const hmac = createHmac('sha1', this.privateKey);
      hmac.update(input);
      return hmac.digest('hex');
    }

  get privateKey(): string {
  
    if (!Crypto.keyCache.privateKey) {
      Crypto.keyCache.privateKey = readFileSync('./keys/privateKey.pem', 'ascii');
    }
    return Crypto.keyCache.privateKey;
  }
  get publicKey(): string {
    if (!Crypto.keyCache.publicKey) {
      Crypto.keyCache.publicKey = readFileSync('./keys/publicKey.pem', 'ascii');
    }
    return Crypto.keyCache.publicKey;
  }

  }
  export const crypto = new Crypto();