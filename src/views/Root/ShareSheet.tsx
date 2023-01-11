import {Text, View} from 'components/Themed';
import React from 'react';
import {RootStackScreenProps} from 'types/NavigationTypes';

const ShareSheet = ({route}: RootStackScreenProps<'Share'>) => {
  console.log(route);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text>ShareSheet</Text>
    </View>
  );
};

export default ShareSheet;
