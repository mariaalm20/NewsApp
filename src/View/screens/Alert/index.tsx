import {CompositeNavigationProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Sound from 'react-native-sound-player';
import Animated from 'react-native-reanimated';

type Props = {
  navigation: CompositeNavigationProp<any, any>;
};

const AlertSound = ({navigation}: Props) => {
  // const opacity = useSharedValue(1);

  const handleAlertWithSound = async () => {
    try {
      Sound.playSoundFile('sound', 'mp3');
    } catch (error) {
      console.error('Erro ao baixar o arquivo de som', error);
    }
  };

  useEffect(() => {
    handleAlertWithSound();
  }, []);

  const goBack = () => {
    navigation.navigate('Patients');

    Sound.stop();
  };

  // const animatedStyle = useDerivedValue(() => {
  //   return {
  //     opacity: withRepeat(
  //       withTiming(opacity.value, {duration: 1000, easing: Easing.linear}),
  //       -1,
  //       false,
  //     ),
  //   };
  // });

  return (
    <Animated.View className={'flex-1 bg-error items-center justify-center '}>
      <TouchableOpacity className="items-center justify-center">
        <Text className="text-[80px] text-center font-n-bold">ALERTA!!!!</Text>
        <Text className="text-[80px] text-center font-n-medium">Quarto 12</Text>
        <TouchableOpacity
          onPress={goBack}
          className="bg-lightBackground p-3 rounded-[10px] mt-7 self-center">
          <Text className="text-[30px] text-center text-primary500">
            Voltar para listagem
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AlertSound;
