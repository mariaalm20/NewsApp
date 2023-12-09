import React from 'react';
import {
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchIcon from '@presentation/utils/assets/icons/patientsIcons/SearchIcon.svg';

type Props = {
  value: string;
  setSearch: (text: string) => void;
  onPressSearch: () => void;
  loading: boolean;
};

const Search = ({value, setSearch, onPressSearch, loading}: Props) => {
  return (
    <View className="bg-light mt-4 mb-4 w-[95%] rounded-[10px] flex-row justify-between px-4">
      <TextInput
        value={value}
        placeholder="Pesquisar"
        className="py-4 font-n-regular text-[18px] w-[95%]"
        onChangeText={text => setSearch(text)}
      />

      <TouchableOpacity className="mt-4" onPress={onPressSearch}>
        {loading ? <ActivityIndicator size="small" /> : <SearchIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default Search;
