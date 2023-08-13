import { Database } from '@deepkit/orm';
import { MySQLDatabaseAdapter } from '@deepkit/mysql';
import { User } from '../src/entities';

export class MySQLDatabase extends Database {
    name = 'marketing';
    constructor() {
        super(new MySQLDatabaseAdapter({
            database:'marketing',
            host: '127.0.0.1',
            port: 3306,
            user:'demo',
            password:'AyEB7kJjm4'
        }), [User]);
    }
}