import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';

import Screen from '@view/components/Screen';
import Button from './components/Button';
import Input from './components/Input';

type Props = {
  navigation: CompositeNavigationProp<any, any>;
};

const Login = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => navigation.navigate('Patients');

  return (
    <Screen navigation={navigation}>
      <View className="flex-1 items-center justify-center z-50">
        <View className="bg-light p-[60px] rounded-[30px] w-[70%]">
          <Text className="font-n-regular text-secondary text-[24px]">
            Bem vindo(a)
          </Text>
          <Text className="font-n-medium text-secondary text-[48px] mb-[30px]">
            Entre na sua conta
          </Text>
          <Input
            value={email}
            setValue={setEmail}
            label="Email"
            placeholder="Digite seu email..."
          />
          <View className="mt-[32px]" />
          <Input
            value={password}
            setValue={setPassword}
            label="Senha"
            placeholder="Digite sua senha..."
            hasIcon
          />

          <View className="pt-[48px]" />

          <Button onLogin={onLogin} />
        </View>
      </View>
    </Screen>
  );
};

export {Login};
