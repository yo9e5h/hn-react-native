import {Linking, Pressable, Text, View} from 'react-native';
import {Story} from 'types/StoryTypes';
import React from 'react';
import moment from 'moment';

const StoryItem = ({item}: {item: Story}) => {
  const loadInBrowser = () => {
    Linking.openURL(item.url).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  // function extractDomain(url: string) {
  //   var domain;
  //   if (url.indexOf('://') > -1) {
  //     domain = url.split('/')[2];
  //   } else {
  //     domain = url.split('/')[0];
  //   }
  //   if (domain.indexOf('www.') > -1) {
  //     domain = domain.split('www.')[1];
  //   }
  //   domain = domain.split(':')[0];
  //   domain = domain.split('?')[0];

  //   return domain;
  // }

  console.log(item.url);

  return (
    <Pressable
      onPress={loadInBrowser}
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
          {item.by} • {moment.unix(item.time).fromNow()}
        </Text>
        <Text
          style={{
            color: '#6b7280',
            fontSize: 12,
            paddingTop: 2,
          }}>
          {item.url}
        </Text>
      </View>
    </Pressable>
  );
};

export default StoryItem;
