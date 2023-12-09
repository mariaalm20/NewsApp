import {Message} from '@presentation/domain/models/Message';
import {patients} from './PatientAPIDataSource';

const messages = {
  response: {
    data: [
      {
        id: '1',
        description: 'Desc',
        doctor: 'Diego Costa',
        vitalSign: [
          {
            type: 'Temperatura',
            vitalSign: 36.1,
            unitMeasurement: 'C',
          },
          {
            vitalSign: 100,
            unitMeasurement: 'bpm',
            type: 'Freq. cardíaca',
          },
          {
            vitalSign: 20,
            unitMeasurement: 'rpm',
            type: 'Freq. respiratória',
          },
          {
            vitalSign: 120,
            unitMeasurement: 'mmHG',
            type: 'Pressão arterial',
          },
          {
            vitalSign: 'A',
            type: 'Estado de consciência',
          },
        ],
        patient: patients.response.data[0],
      },
    ],
    status: 'ok',
  },
};

export const getMessages = async (): Promise<Message[]> => {
  const response = await messages.response;

  return response.data;
};

export const getMessage = async (
  id: Omit<Message, 'id'>,
): Promise<Message | undefined> => {
  const message = await messages.response.data.find(
    messageId => messageId === id,
  );

  return message;
};
