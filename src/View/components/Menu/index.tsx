import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import ListIcon from '@presentation/utils/assets/icons/patientsIcons/listIcon.svg';
import InfoIcon from '@presentation/utils/assets/icons/patientsIcons/infoIcon.svg';
import SignOut from '@presentation/utils/assets/icons/patientsIcons/signOut.svg';
import ChevronLeft from '@presentation/utils/assets/icons/patientsIcons/Chevron-Left.svg';

import {CompositeNavigationProp} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

type Props = {
  navigation: CompositeNavigationProp<any, any>;
  showGoBack?: boolean;
};

const Menu = ({navigation, showGoBack = false}: Props) => {
  const currentRouteName = useRoute().name;

  return (
    <View className="bg-light w-[78px] h-[50%] rounded-br-[10px] items-center absolute left-0">
      {showGoBack ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-secondary items-center justify-center mt-[80%] w-[45px] h-[45px] rounded-[10px]">
          <ChevronLeft width={20} height={20} />
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            className={`${
              currentRouteName === 'Patients' ? 'bg-secondary' : 'bg-gray3'
            } items-center justify-center mt-[40%] w-[45px] h-[45px] rounded-[10px]`}>
            <ListIcon width={40} height={28} />
          </TouchableOpacity>
          <TouchableOpacity
            className={`${
              currentRouteName === 'Info' ? 'bg-secondary' : 'bg-gray3'
            } items-center justify-center mt-[10%] w-[45px] h-[45px] rounded-[10px]`}>
            <InfoIcon width={80} height={32} />
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        className={`items-center justify-center  w-[45px] h-[45px] rounded-[10px] ${
          showGoBack ? 'mt-[520%]' : 'mt-[480%]'
        } `}>
        <SignOut width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
