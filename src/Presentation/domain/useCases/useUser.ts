import {useQuery} from 'react-query';
import {getUser, getUsers} from '@model/data/UserAPIDataSource';

import {User} from '../models/User';

const useUser = (userId: Omit<User, 'id'>) => {
  const {data, isLoading, isError, isSuccess} = useQuery<User | undefined>({
    queryKey: ['user'],
    queryFn: () => getUser(userId),
  });

  return {
    user: data,
    isLoading,
    isError,
    isSuccess,
  };
};

const useUsers = () => {
  const {data, isLoading, isError, isSuccess} = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
  return {
    users: data,
    isLoading,
    isError,
    isSuccess,
  };
};

export {useUser, useUsers};
