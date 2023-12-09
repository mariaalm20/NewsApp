import {Patient} from '../models/Patient';
import {Message, VitalSign} from '../models/Message';

export interface MessageRepository {
  getPatient: (patient: Omit<Patient, 'id'>) => Promise<Patient>;
  getMessage: (Message: Omit<Message, 'id'>) => Promise<Message>;
  getMessages: () => Promise<Message[]>;
  getStatusBySign: (Message: Omit<VitalSign, 'id'>) => string;
}
