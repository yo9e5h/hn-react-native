import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingScreen;
