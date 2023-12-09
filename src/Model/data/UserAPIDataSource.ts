import {User} from '../../Presentation/domain/models/User';

const users = {
  response: {
    data: [{id: '', name: '', email: '', position: '', password: ''}],
    status: 'ok',
  },
};

export const getUsers = async (): Promise<User[]> => {
  const response = await users.response;

  return response.data;
};

export const getUser = (id: Omit<User, 'id'>): User | undefined => {
  const user = users.response.data.find(userId => userId === id);

  return user;
};
