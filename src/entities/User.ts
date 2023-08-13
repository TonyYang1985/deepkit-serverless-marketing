import { entity, AutoIncrement, PrimaryKey, MySQL, MinLength, MaxLength, Unique } from '@deepkit/type';
    
@entity.name('user')
export class User {
    id: number & PrimaryKey & AutoIncrement = 0;
    constructor(public name: string & MinLength<3> & MaxLength<255> & Unique,public password: string & MaxLength<255>) {
    }
}
