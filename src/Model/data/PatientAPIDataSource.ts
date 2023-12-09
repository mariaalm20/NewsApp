import {Patient} from '../../Presentation/domain/models/Patient';

// {
//   idPatient: '122',
//   name: 'Ana',
//   age: 23,
//   vitalSignalPatient: [
//     {
//       vitalSignal: 'Temperatura',
//       measurement: 36.1,
//       unitMeasurement: 'C',
//     },
//     {
//       measurement: 100,
//       unitMeasurement: 'bpm',
//       vitalSignal: 'Freq. cardíaca',
//     },
//     {
//       measurement: 20,
//       unitMeasurement: 'rpm',
//       vitalSignal: 'Freq. respiratória',
//     },
//     {
//       measurement: 120,
//       unitMeasurement: 'mmHG',
//       vitalSignal: 'Pressão arterial',
//     },
//     {
//       measurement: 'A',
//       vitalSignal: 'Estado de consciência',
//     },
//   ],
//   room: 11,
// },

export const patients = {
  response: {
    data: [
      {
        id: '122',
        name: 'Ana',
        age: 10,
        gender: 'F',
      },
    ],
    status: 200,
  },
};

export const getPatients = async (): Promise<Patient[]> => {
  const response = await patients.response;

  return response.data;
};

export const getPatient = async (
  id: Omit<Patient, 'id'>,
): Promise<Patient | undefined> => {
  const message = await patients.response.data.find(
    messageId => messageId === id,
  );

  return message;
};
