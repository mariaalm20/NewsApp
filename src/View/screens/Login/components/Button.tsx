import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Props = {
  onLogin: () => void;
};

const Button = ({onLogin}: Props) => {
  return (
    <TouchableOpacity
      onPress={onLogin}
      className="w-[80%] bg-primary500 p-4 rounded-[8px] items-center self-center">
      <Text className="text-[18px] text-light  font-n-medium ">Entrar</Text>
    </TouchableOpacity>
  );
};

export default Button;
