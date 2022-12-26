import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Story} from 'types/StoryTypes';
import moment from 'moment';

const NewsListItem = ({item}: {item: Story}) => {
  const navigation = useNavigation();
  const time = moment.unix(item.time).fromNow();

  return (
    <Pressable
      onPress={() => navigation.navigate('SinglePost', {id: item.id})}
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        borderBottomColor: '#ccc',
        paddingVertical: 16,
        paddingRight: 8,
      }}>
      <View
        style={{
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 8,
        }}>
        <Text
          style={{
            color: '#FF6600',
            fontWeight: 'bold',
          }}>
          {item.score}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            color: '#6b7280',
            fontSize: 12,
            paddingTop: 2,
          }}>
          {item.by} • {time}
        </Text>
        <Text
          style={{
            color: '#6b7280',
            fontSize: 12,
            paddingTop: 2,
          }}>
          {item.score} points • {item.descendants} comments
        </Text>
      </View>
    </Pressable>
  );
};

export default NewsListItem;
