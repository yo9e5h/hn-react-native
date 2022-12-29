import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from 'types/NavigationTypes';

const NotFoundScreen = ({navigation}: RootStackScreenProps<'NotFound'>) => {
  console.log(navigation);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Text>
        This screen doesn't exist.
        {'\n'}
      </Text>
    </View>
  );
};

export default NotFoundScreen;
