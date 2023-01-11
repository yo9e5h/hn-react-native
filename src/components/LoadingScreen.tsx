import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {View} from './Themed';
import useColorScheme from 'hooks/useColorScheme';

const LoadingScreen = () => {
  const theme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme === 'dark' ? '#fff' : '#000'} />
    </View>
  );
};

export default LoadingScreen;
