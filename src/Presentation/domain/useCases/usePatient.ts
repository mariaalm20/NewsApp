import {getPatient, getPatients} from '@model/data/PatientAPIDataSource';
import {useQuery} from 'react-query';
import {useEffect, useState} from 'react';

import {Patient} from '../models/Patient';
import {timeOut} from '../../utils/getTimeOut';

const usePatient = (patientId: Omit<Patient, 'id'>) => {
  const {data, isLoading, isError, isSuccess} = useQuery<Patient | undefined>({
    queryKey: ['patient'],
    queryFn: () => getPatient(patientId),
  });

  return {
    patient: data,
    isLoading,
    isError,
    isSuccess,
  };
};

const usePatients = () => {
  const {data, isLoading, isError, isSuccess} = useQuery<Patient[]>({
    queryKey: ['patients'],
    queryFn: () => getPatients(),
  });

  const [filterLoading, setFilterLoading] = useState(false);
  const [listPatients, setListPatients] = useState<Patient[] | undefined>([]);

  useEffect(() => {
    setListPatients(data);
  }, [data]);

  const filterPatient = async (searchByName: string) => {
    setFilterLoading(true);
    await timeOut(filterLoading);
    const patientsFind =
      searchByName !== ''
        ? listPatients?.find(item => item.name.trim().includes(searchByName))
        : null;

    if (patientsFind) {
      setListPatients([patientsFind]);
    } else if (searchByName === '') {
      setListPatients(listPatients);
    } else {
      setListPatients([]);
    }

    setFilterLoading(false);
  };
  return {
    state: {
      patients: listPatients,
      isLoading,
      isError,
      isSuccess,
      filterLoading,
    },
    dispatch: {filterPatient},
  };
};

export {usePatient, usePatients};
