import {Linking, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Story} from 'types/StoryTypes';
import useTime from 'src/hooks/useTime';
import {View, Text} from 'components/Themed';
import {StyleSheet} from 'react-native';
import IconComment from 'src/assets/IconComment';
import IconBookmark from 'src/assets/IconBookmark';
import useColorScheme from 'hooks/useColorScheme';
import useFavouriteStore from 'src/store/favouriteStore';

const NewsListItem = ({item}: {item: Story}) => {
  const favourites = useFavouriteStore(state => state.favourites);
  const isFavourite = favourites.some(favourite => favourite.id === item.id);
  const toggleFavourite = useFavouriteStore(state => state.toggleFavourite);
  const theme = useColorScheme();
  const navigation = useNavigation();
  const time = useTime(item.time);
  const hasUrl = item.url !== undefined;
  const isJob = item.type === 'job';

  const handleLink = () => {
    if (isJob) {
      Linking.openURL(item.url);
    } else {
      navigation.navigate('SinglePost', {
        story: item,
      });
    }
  };

  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
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
    sideView: {
      flex: 1,
    },
    title: {
      fontWeight: '500',
      fontSize: 14,
      marginRight: 12,
    },
    time: {
      fontSize: 12,
      paddingTop: 4,
    },
    commentAndBookmark: {
      flexDirection: 'row',
      paddingTop: 4,
    },
    labelWithIcon: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    label: {
      marginLeft: 2,
    },
  });

  return (
    <Pressable onPress={handleLink} style={style.container}>
      <View style={style.scoreView}>
        <Text style={style.scoreText}>{item.score}</Text>
      </View>
      <View style={style.sideView}>
        <Text style={style.title} darkColor="#f3f4f6" lightColor="#1f2937">
          {item.title}
        </Text>
        <Text style={style.time} lightColor="#4b5563" darkColor="#d1d5db">
          {item.by} • {time}
        </Text>
        {hasUrl && (
          <Text
            style={style.time}
            numberOfLines={1}
            darkColor="#6b7280"
            lightColor="#6b7280">
            {item.url
              .replace('http://', '')
              .replace('https://', '')
              .replace('www.', '')}
          </Text>
        )}
        {!isJob && (
          <View style={style.commentAndBookmark}>
            <View style={style.labelWithIcon}>
              <IconComment color={theme === 'dark' ? '#38bdf8' : '#0284c7'} />
              <Text
                style={style.label}
                lightColor="#0284c7"
                darkColor="#38bdf8">
                {item.descendants}{' '}
                {item.descendants > 1 ? 'Comments' : 'Comment'}
              </Text>
            </View>
            <Pressable
              style={style.labelWithIcon}
              onPress={() => toggleFavourite(item)}>
              <IconBookmark
                color={theme === 'dark' ? '#22c55e' : '#16a34a'}
                fillColor={
                  isFavourite
                    ? theme === 'dark'
                      ? '#22c55e'
                      : '#16a34a'
                    : 'transparent'
                }
              />
              <Text
                style={style.label}
                lightColor="#16a34a"
                darkColor="#22c55e">
                {isFavourite ? 'Saved' : 'Save'}
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default NewsListItem;
