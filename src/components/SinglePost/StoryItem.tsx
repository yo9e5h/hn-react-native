import {Alert, Linking, Pressable, StyleSheet} from 'react-native';
import {Story} from 'types/StoryTypes';
import React from 'react';
import useTime from 'src/hooks/useTime';
import {View, Text} from 'components/Themed';
import useColorScheme from 'hooks/useColorScheme';

const StoryItem = ({item}: {item: Story}) => {
  const theme = useColorScheme();
  const loadInBrowser = () => {
    try {
      Linking.openURL(item.url);
    } catch (error) {
      Alert.alert('Error', 'Could not open link');
    }
  };

  const styles = StyleSheet.create({
    pressable: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      alignItems: 'center',
      borderBottomColor: theme === 'dark' ? '#1f2937' : '#e5e7eb',
      paddingVertical: 16,
      paddingRight: 8,
    },
    scoreView: {
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
    },
    scoreText: {
      color: '#FF6600',
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
    },
    titleText: {
      fontWeight: '500',
      fontSize: 14,
    },
    time: {
      fontSize: 12,
      paddingTop: 2,
    },
    url: {
      color: '#6b7280',
      fontSize: 12,
      paddingTop: 2,
    },
  });

  return (
    <Pressable onPress={loadInBrowser} style={styles.pressable}>
      <View style={styles.scoreView}>
        <Text style={styles.scoreText}>{item.score}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.time} lightColor="#4b5563" darkColor="#d1d5db">
          {item.by} • {useTime(item.time)}
        </Text>
        <Text style={styles.url}>{item.url}</Text>
      </View>
    </Pressable>
  );
};

export default StoryItem;
