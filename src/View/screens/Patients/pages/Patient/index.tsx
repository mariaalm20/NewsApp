import React from 'react';
import {Text, View, Image} from 'react-native';
import {CompositeNavigationProp, useRoute} from '@react-navigation/native';

import Screen from '@view/components/Screen';
import VitalSignCard from '@view/components/VitalSignCard';

import NurseIcon from '@presentation/utils/assets/icons/patientIcons/nurse.png';
import {getConsciousnessState} from '@presentation/utils';
import {Message} from '@presentation/domain/models/Message';

import {getVitalSign} from '../../utils/getVitalSign';

type Params = {
  message: Message;
  monitoring: number | string;
};

type Props = {
  navigation: CompositeNavigationProp<any, any>;
};

const Patient = ({navigation}: Props) => {
  const {
    params: {message, monitoring},
  } = useRoute() as {params: Params};
  const {patient, vitalSign} = message;

  const {breathing, cardiac, conscience, pressure, temperature} =
    getVitalSign(vitalSign);

  return (
    <Screen showMenu navigation={navigation} showGoBack>
      <View className="flex-1 mt-4">
        <Text className="text-[28px] font-n-bold text-secondary">
          {message.patient.name} - Status: Moderado
        </Text>
        <View className="flex-row mt-2 mb-8">
          <View className="bg-primary500 p-1 justify-center rounded-[4px]">
            <Text className="text-[15px] font-n-medium text-light">
              {patient.gender === 'F' ? 'Feminino' : 'Masculino'}
            </Text>
          </View>
          <View className="bg-primary500 ml-3 p-1 justify-center rounded-[4px]">
            <Text className="text-[15px] font-n-medium text-light">
              {patient.age} anos
            </Text>
          </View>
          <View className="bg-primary500 ml-3  p-1 justify-center rounded-[4px]">
            <Text className="text-[15px] font-n-medium text-light">
              Pontuação 3
            </Text>
          </View>
        </View>

        <View className=" flex-row mb-10">
          <View
            className={`${
              monitoring !== 'U'
                ? 'border-[#c4c4c4] border-[1px] '
                : 'border-error border-[2px] '
            }  p-6  rounded-[10px] items-center`}>
            <Text className="text-[16px] text-textGray  font-n-bold">
              Monitoramento
            </Text>
            <Text className="text-[24px] text-secondary font-n-medium text-center mt-1">
              {monitoring === 'U'
                ? 'Avaliação urgente'
                : `À cada ${monitoring}h`}
            </Text>
          </View>

          <View className="border-[1px] border-[#c4c4c4] p-6 ml-5 rounded-[10px] items-center">
            <Text className="text-[16px] text-textGray font-n-bold">
              Médico(a) responsável
            </Text>
            <Text className="text-[24px] text-secondary font-n-medium text-center mt-1">
              Dr. {message.doctor}
            </Text>
          </View>
        </View>

        <View className="flex-row">
          {temperature && (
            <VitalSignCard
              width={'w-[220px]'}
              height={'h-[180px]'}
              measurement={temperature.vitalSign as number}
              unitMeasurement={temperature.unitMeasurement}
              vitalSignal={temperature.type}
              isBigCard
            />
          )}

          <View className="w-[10px]" />
          {breathing && (
            <VitalSignCard
              width={'w-[220px]'}
              height={'h-[180px]'}
              measurement={breathing.vitalSign as number}
              unitMeasurement={breathing.unitMeasurement}
              vitalSignal={breathing.type}
              isBigCard
            />
          )}
        </View>

        <View className="flex-row mt-6">
          {cardiac && (
            <VitalSignCard
              width={'w-[220px]'}
              height={'h-[180px]'}
              measurement={cardiac.vitalSign as number}
              unitMeasurement={cardiac.unitMeasurement}
              vitalSignal={cardiac.type}
              isBigCard
            />
          )}
          <View className="w-[10px]" />

          {pressure && (
            <VitalSignCard
              width={'w-[220px]'}
              height={'h-[180px]'}
              measurement={pressure.vitalSign as number}
              unitMeasurement={pressure.unitMeasurement}
              vitalSignal={pressure.type}
              isBigCard
            />
          )}
        </View>
        <View className="flex-row mt-6">
          {conscience && (
            <VitalSignCard
              width={'w-[220px]'}
              height={'h-[180px]'}
              measurement={getConsciousnessState(
                conscience.vitalSign as string,
              )}
              vitalSignal={conscience.type}
              isBigCard
            />
          )}
        </View>

        <View className="z-50 bottom-[360px] right-[-280px]">
          <Image source={NurseIcon} />
        </View>
      </View>
    </Screen>
  );
};

export default Patient;
