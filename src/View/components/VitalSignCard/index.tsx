import React from 'react';
import {View, Text} from 'react-native';
import {
  getColorIconBySignal,
  getConsciousnessState,
  getStatusByVitalSignal,
} from '@presentation/utils';

type Props = {
  vitalSignal: string;
  measurement: number | string;
  unitMeasurement?: string;
  width: string;
  height: string;
  isBigCard?: boolean;
};

const VitalSignCard = ({
  vitalSignal,
  measurement,
  unitMeasurement,
  width,
  height,
  isBigCard = false,
}: Props) => {
  const {color, Icon} = getColorIconBySignal(vitalSignal);
  const {status} = getStatusByVitalSignal(measurement, vitalSignal);
  return (
    <View className={`bg-light ${width} ${height} rounded-[10px] p-2 `}>
      <View className="flex-row items-center">
        <View
          className={`${color} ${
            isBigCard ? 'w-[40px] h-[40px]' : 'w-[32px] h-[30px]'
          } rounded-[8px] items-center justify-center`}>
          <Icon width={isBigCard ? 22 : 20} height={isBigCard ? 22 : 20} />
        </View>
        <Text
          className={`${
            isBigCard
              ? 'text-[18px] font-n-medium text-secondary ml-2 flex-1'
              : 'text-[13px] font-n-regular text-secondary ml-2 flex-1'
          }`}>
          {vitalSignal}
        </Text>
      </View>
      <View
        className={`flex-row mt-3 items-center ${isBigCard && 'mt-[24px]'}`}>
        <Text
          className={`${
            isBigCard
              ? 'text-[40px] text-secondary font-n-bold'
              : 'text-[30px] text-secondary font-n-bold'
          }`}>
          {vitalSignal === 'Estado de consciência'
            ? getConsciousnessState(measurement as string)
            : measurement}
        </Text>
        <Text
          className={`${
            isBigCard
              ? 'text-[18px] text-textGray font-n-medium ml-1 mt-1'
              : 'text-[16px] text-textGray font-n-medium ml-1 mt-1'
          }`}>
          {unitMeasurement}
        </Text>
      </View>
      <View
        className={`${color} rounded-[4px] items-center justify-center w-[40%] py-1 mt-2`}>
        <Text
          className={`${
            isBigCard
              ? 'text-[14px] text-secondary font-n-medium'
              : 'text-[12px] text-secondary font-n-medium'
          }`}>
          {status}
        </Text>
      </View>
    </View>
  );
};

export default VitalSignCard;
