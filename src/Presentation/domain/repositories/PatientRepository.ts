import {Patient} from '../models/Patient';

export interface PatientRepository {
  getPatient: (patient: Omit<Patient, 'id'>) => Promise<Patient>;
}
