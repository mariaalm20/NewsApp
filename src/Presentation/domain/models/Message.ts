import {Patient} from './Patient';

export interface VitalSign {
  type: string;
  vitalSign: number | string;
  unitMeasurement?: string;
}

export interface Message {
  id: string;
  description: string;
  vitalSign: VitalSign[];
  patient: Patient;
  doctor: string;
}
