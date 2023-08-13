import {MinLength, MaxLength } from '@deepkit/type';

export interface SignInWithPassword {
  name: string & MinLength<3> & MaxLength<255>;
  password: string & MaxLength<255>;
}