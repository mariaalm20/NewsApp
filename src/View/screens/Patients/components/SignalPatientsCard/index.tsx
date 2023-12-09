import {CompositeNavigationProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import VitalSignCard from '@view/components/VitalSignCard';

import {getStatusByAllVitalSignal} from '@presentation/utils';
import {Message} from '@presentation/domain/models/Message';

type Props = {
  navigation: CompositeNavigationProp<any, any>;
  message: Message;
};

const SignalPatientsCard = ({navigation, message}: Props) => {
  const {patient, vitalSign} = message;
  const {name} = patient;
  const {score, status, color, monitoring} =
    getStatusByAllVitalSignal(vitalSign);

  const consciousness = vitalSign.find(
    item => item.type === 'Estado de consciência',
  );
  const onSeePatient = () => {
    navigation.navigate('Patient', {message, monitoring});
  };

  const vitalSignalPatientFiltered = vitalSign.filter(
    vitalSignal => vitalSignal.type !== 'Estado de consciência',
  );

  useEffect(() => {
    if (monitoring === 'U') {
      navigation.navigate('AlertSound');
    }
  }, [monitoring, navigation]);

  return (
    <View className="bg-gray2 px-5 pt-4 pb-12 mt-[20px] w-[95%] rounded-[10px] z-50 shadow-lg">
      <View
        className={`absolute ${
          color === 'bg-red' ? 'bg-[#FF6D6D]' : color
        } bottom-0 top-0 rounded-tr-[8px] rounded-br-[8px]`}>
        <Text
          className={
            color === 'bg-red'
              ? 'text-[#FF6D6D]'
              : color === 'bg-green'
              ? 'text-green'
              : 'text-yellow'
          }>
          oi
        </Text>
      </View>
      <View className="mb-6 justify-between flex-row items-center">
        <View className="flex-row items-center">
          <Text className="text-[20px] text-secondary font-n-bold">{name}</Text>
          <View className="bg-gray1 ml-3 items-center justify-center px-2 py-1 rounded-[8px]">
            <Text className="text-[13px] text-secondary font-n-medium">
              Leito 12
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onSeePatient}
          className="border-[2px] border-gray1 items-center p-[6px] rounded-[8px]">
          <Text className="text-[16px] text-regular font-n-regular text-secondary">
            Ver mais
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row">
        {vitalSignalPatientFiltered.map(vitalSignal => (
          <>
            <View className="flex-row">
              <>
                <VitalSignCard
                  width={'w-[150px]'}
                  height={'h-[140px]'}
                  measurement={vitalSignal.vitalSign}
                  unitMeasurement={vitalSignal.unitMeasurement}
                  vitalSignal={vitalSignal.type}
                />
                <View className="px-1" />
              </>
            </View>
          </>
        ))}
      </View>

      <View className="pt-3" />

      {consciousness && (
        <VitalSignCard
          width={'w-[150px]'}
          height={'h-[140px]'}
          measurement={consciousness.vitalSign as string}
          vitalSignal="Estado de consciência"
        />
      )}

      <View className="bg-light absolute bottom-[-20px] right-10 left-10 h-[50px] rounded-[10px] flex-row justify-between items-center px-3">
        <Text className="text-[16px] text-secondary font-n-medium">
          Status: {status}
        </Text>

        <View className={`${color} p-1 rounded-[8px]`}>
          <Text className="text-[16px] text-secondary font-n-medium">
            Pontuação: {score}
          </Text>
        </View>

        <Text className="text-[16px] text-secondary font-n-medium">
          {monitoring === 'U'
            ? 'Avaliação URGENTE'
            : `Monitoramento à cada ${monitoring}h`}
        </Text>
      </View>
    </View>
  );
};

export default SignalPatientsCard;
