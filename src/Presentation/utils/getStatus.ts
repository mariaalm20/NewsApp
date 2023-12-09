import {VitalSign} from '../domain/models/Message';

const temperaturePoints = (measurementTemperature: number) => {
  if (measurementTemperature >= 36.1 && measurementTemperature <= 38) {
    return {status: 'Normal', score: 0};
  }
  if (
    (measurementTemperature >= 35.1 && measurementTemperature <= 36) ||
    (measurementTemperature >= 38.1 && measurementTemperature <= 39)
  ) {
    return {status: 'Alterado', score: 1};
  }
  if (measurementTemperature <= 35) {
    return {status: 'Crítico', score: 3};
  }
  return {status: 'Alterado', score: 2};
};

const freqCardiac = (measurementTemperature: number) => {
  if (measurementTemperature >= 51 || measurementTemperature <= 90) {
    return {status: 'Normal', score: 0};
  }
  if (
    (measurementTemperature >= 41 && measurementTemperature <= 50) ||
    (measurementTemperature >= 91 && measurementTemperature <= 110)
  ) {
    return {status: 'Alterado', score: 1};
  }

  if (measurementTemperature >= 111 && measurementTemperature <= 130) {
    return {status: 'Alterado', score: 2};
  }
  return {status: 'Crítico', score: 3};
};

const freqBreathing = (measurementTemperature: number) => {
  if (measurementTemperature >= 12 && measurementTemperature <= 20) {
    return {status: 'Normal', score: 0};
  }
  if (measurementTemperature >= 9 && measurementTemperature <= 11) {
    return {status: 'Alterado', score: 1};
  }
  if (measurementTemperature >= 21 && measurementTemperature <= 24) {
    return {status: 'Alterado', score: 2};
  }
  return {status: 'Crítico', score: 3};
};

const pressure = (measurementTemperature: number) => {
  if (measurementTemperature >= 111 && measurementTemperature <= 219) {
    return {status: 'Normal', score: 0};
  }
  if (measurementTemperature >= 101 && measurementTemperature <= 110) {
    return {status: 'Alterado', score: 1};
  }
  if (measurementTemperature >= 91 && measurementTemperature <= 100) {
    return {status: 'Alterado', score: 2};
  }
  return {status: 'Crítico', score: 3};
};

const conscience = (measurementConscience: string) => {
  if (measurementConscience === 'A') {
    return {status: 'Normal', score: 0};
  }
  if (measurementConscience === 'F') {
    return {status: 'Alterado', score: 1};
  }

  return {status: 'Crítico', score: 3};
};

export const getStatusByVitalSignal = (
  measurementVitalSignal: number | string,
  vitalSignal: string,
) => {
  if (vitalSignal === 'Temperatura') {
    return temperaturePoints(measurementVitalSignal as number);
  }
  if (vitalSignal === 'Freq. cardíaca') {
    return freqCardiac(measurementVitalSignal as number);
  }
  if (vitalSignal === 'Freq. respiratória') {
    return freqBreathing(measurementVitalSignal as number);
  }
  if (vitalSignal === 'Pressão arterial') {
    return pressure(measurementVitalSignal as number);
  }

  return conscience(measurementVitalSignal as string);
};

export const getStatusByAllVitalSignal = (vitalSignalPatient: VitalSign[]) => {
  const measurementTemperature = vitalSignalPatient.find(
    vitalSignal => vitalSignal.type === 'Temperatura',
  )?.vitalSign;

  const measurementHeartRate = vitalSignalPatient.find(
    vitalSignal => vitalSignal.type === 'Freq. cardíaca',
  )?.vitalSign;

  const measurementRespiratoryRate = vitalSignalPatient.find(
    vitalSignal => vitalSignal.type === 'Freq. respiratória',
  )?.vitalSign;

  const measurementPressure = vitalSignalPatient.find(
    vitalSignal => vitalSignal.type === 'Pressão arterial',
  )?.vitalSign;

  const measurementConsciousness = vitalSignalPatient.find(
    vitalSignal => vitalSignal.type === 'Estado de consciência',
  )?.vitalSign;

  const temperatureScore =
    temperaturePoints(measurementTemperature as number).score ?? 0;
  const heartRateScore = freqCardiac(measurementHeartRate as number).score ?? 0;
  const respiratoryRateScore =
    freqBreathing(measurementRespiratoryRate as number).score ?? 0;
  const pressureScore = pressure(measurementPressure as number).score ?? 0;
  const consciousnessScore =
    conscience(measurementConsciousness as string).score ?? 0;

  const totalScore =
    temperatureScore +
    heartRateScore +
    respiratoryRateScore +
    pressureScore +
    consciousnessScore;

  if (
    temperatureScore === 3 ||
    heartRateScore === 3 ||
    respiratoryRateScore === 3 ||
    pressureScore === 3 ||
    consciousnessScore === 3
  ) {
    return {
      score: totalScore,
      status: 'Risco alto',
      color: 'bg-red',
      monitoring: 'U',
    };
  }

  if (totalScore >= 0 && totalScore <= 2) {
    const monitoring = totalScore === 0 ? 12 : 4;
    return {
      score: totalScore,
      status: 'Risco baixo',
      color: 'bg-green',
      monitoring: monitoring,
    };
  }

  if (totalScore >= 3 && totalScore <= 6) {
    return {
      score: totalScore,
      status: 'Risco moderado',
      color: 'bg-yellow',
      monitoring: 1,
    };
  }

  return {
    score: totalScore,
    status: 'Risco alto',
    color: 'bg-red',
    monitoring: 'U',
  };
};
