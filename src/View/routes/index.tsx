import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AlertSound, Login, Patient, Patients} from '../screens';

export type RootStackParamList = {
  Login: undefined;
  Patient: undefined;
  Patients: undefined;
  AlertSound: undefined;
};

const {Navigator, Screen, Group} = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Login" component={Login} />

        <Screen name="Patients" component={Patients} />
        <Screen name="Patient" component={Patient} />
        <Group
          screenOptions={{
            presentation: 'modal',
            cardOverlayEnabled: true,
          }}>
          <Screen name="AlertSound" component={AlertSound} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
}
