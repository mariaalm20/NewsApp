import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import theme from '../../../global/theme';

import EyeIcon from '@presentation/utils/assets/icons/loginIcons/eye.svg';
import closedEyeIcon from '@presentation/utils/assets/icons/loginIcons/closedEye.png';

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  Icon?: any;
  hasIcon?: boolean;
};

const Input = ({
  label,
  value,
  setValue,
  placeholder,
  hasIcon = false,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View>
      <Text className="text-[18px] text-secondary mb-[8px]  font-n-medium">
        {label}
      </Text>
      <View className="border-[2px] border-gray3 rounded-[10px]  px-2 py-[6px]  flex-row justify-between items-center">
        <TextInput
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={text => setValue(text)}
          className="text-[16px] font-n-regular"
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textGray}
        />
        {hasIcon && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeIcon />
            ) : (
              <Image source={closedEyeIcon} className="w-[26px] h-[29px]" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
