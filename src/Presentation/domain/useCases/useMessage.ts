import {useQuery} from 'react-query';
import {useEffect, useState} from 'react';
import {getMessage, getMessages} from '@model/data/MessageAPIDataSource';

import {Message} from '../models/Message';
import {timeOut} from '../../utils/getTimeOut';

const useMessage = (messageId: Omit<Message, 'id'>) => {
  const {data, isLoading, isError, isSuccess} = useQuery<Message | undefined>({
    queryKey: ['message'],
    queryFn: () => getMessage(messageId),
  });

  return {
    message: data,
    isLoading,
    isError,
    isSuccess,
  };
};

const useMessages = () => {
  const [filterLoading, setFilterLoading] = useState(false);
  const [messages, setMessages] = useState<Message[] | undefined>([]);

  const {data, isLoading, isError, isSuccess} = useQuery<Message[]>({
    queryKey: ['messages'],
    queryFn: () => getMessages(),
  });

  const filterPatient = async (searchByName: string) => {
    setFilterLoading(true);
    await timeOut(filterLoading);
    const patientsFind =
      searchByName.trim() !== ''
        ? data?.filter(item =>
            item.patient.name.trim().includes(searchByName.trim()),
          )
        : data || [];

    setMessages(patientsFind || []);
    setFilterLoading(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setMessages(data);
    }
  }, [isSuccess, data]);

  return {
    state: {
      messages: messages,
      filterLoading,
      isLoading,
      isError,
      isSuccess,
    },
    dispatch: {
      filterPatient,
    },
  };
};

export {useMessage, useMessages};
