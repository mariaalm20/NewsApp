import {User} from '../models/User';

export interface UserRepository {
  getUser: (user: Omit<User, 'id'>) => Promise<User>;
  createUser: (user: User) => string;
  validateFields: (user: User) => boolean;
}
