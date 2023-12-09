import {CompositeNavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useMessages} from '@presentation/domain/useCases/useMessage';
import {Message} from '@presentation/domain/models/Message';
import {formattedDate} from '@presentation/utils';
import SearchIcon from '@presentation/utils/assets/icons/patientsIcons/SearchIcon.svg';

import Screen from '@view/components/Screen';
import Search from '../components/Search';
import SignalPatientsCard from '../components/SignalPatientsCard';

type Props = {
  navigation: CompositeNavigationProp<any, any>;
};

const Patients = ({navigation}: Props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');

  const {
    state: {messages, filterLoading},
    dispatch: {filterPatient},
  } = useMessages();

  return (
    <Screen showMenu navigation={navigation}>
      <View className="flex-1 mt-4 rounded-[10px] z-50">
        <ScrollView>
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-[28px] text-secondary font-n-bold">
                Pacientes
              </Text>
              <Text className="text-[16px] text-textGray font-n-medium">
                {formattedDate}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setShowSearch(!showSearch)}
              className="border-[1px] mr-10 w-[52px] h-[44px] rounded-[10px] border-gray3 items-center justify-center">
              <SearchIcon />
            </TouchableOpacity>
          </View>

          {showSearch && (
            <Search
              setSearch={setSearch}
              value={search}
              onPressSearch={() => filterPatient(search)}
              loading={filterLoading}
            />
          )}

          {messages?.length === 0 ? (
            <View className="self-center mt-[50%]">
              <Text className="text-[30px] text-secondary font-n-bold text-center">
                Que pena :(
              </Text>
              <Text className="text-[24px] text-secondary font-n-regular mt-1">
                Não há pacientes com esse nome
              </Text>
              <Text className="text-[24px] text-secondary font-n-regular mt-1 text-center">
                Tente novamente
              </Text>
            </View>
          ) : (
            <>
              {messages?.map((message: Message) => (
                <>
                  <SignalPatientsCard
                    key={message.id}
                    navigation={navigation}
                    message={message}
                  />
                  <View className="h-[20px]" />
                </>
              ))}
            </>
          )}
        </ScrollView>
      </View>
    </Screen>
  );
};

export default Patients;
