import {VitalSign} from '@presentation/domain/models/Message';

export const getVitalSign = (vitalSign: VitalSign[]) => {
  const temperature = vitalSign.find(
    vitalSignal => vitalSignal.type === 'Temperatura',
  );
  const breathing = vitalSign.find(
    vitalSignal => vitalSignal.type === 'Freq. respiratória',
  );
  const cardiac = vitalSign.find(
    vitalSignal => vitalSignal.type === 'Freq. cardíaca',
  );
  const pressure = vitalSign.find(
    vitalSignal => vitalSignal.type === 'Pressão arterial',
  );
  const conscience = vitalSign.find(
    vitalSignal => vitalSignal.type === 'Estado de consciência',
  );

  return {
    temperature,
    breathing,
    cardiac,
    pressure,
    conscience,
  };
};
