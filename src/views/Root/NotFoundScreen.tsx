import {StyleSheet} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from 'types/NavigationTypes';
import {Text, View} from 'components/Themed';

const NotFoundScreen = ({navigation}: RootStackScreenProps<'NotFound'>) => {
  console.log(navigation);

  const style = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={style.container}>
      <Text>
        This screen doesn't exist.
        {'\n'}
      </Text>
    </View>
  );
};

export default NotFoundScreen;
