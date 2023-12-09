import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';

import Menu from '../Menu';

type Props = {
  children: ReactNode;
  showMenu?: boolean;
  navigation: CompositeNavigationProp<any, any>;
  showGoBack?: boolean;
};

const Screen = ({
  children,
  showMenu = false,
  navigation,
  showGoBack,
}: Props) => {
  return (
    <View
      className={`flex-1 bg-lightBackground py-[20px] ${
        showMenu && 'pl-[100px]'
      } relative`}>
      {showMenu && <Menu navigation={navigation} showGoBack={showGoBack} />}
      {children}
      <View className="absolute bg-secondary bottom-0 right-0 left-0 h-[220px] rounded-tl-[300px] z-10">
        <Text className="text-lightBackground">oi</Text>
      </View>
    </View>
  );
};

export default Screen;
