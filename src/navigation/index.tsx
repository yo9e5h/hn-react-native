import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {RootStackParamList} from 'types/NavigationTypes';
import TopTabs from './TopTabs';
import SinglePost from 'views/Root/SinglePost';
import NotFoundScreen from 'views/Root/NotFoundScreen';
import {Pressable, Share, StyleSheet} from 'react-native';
import useColorScheme from 'hooks/useColorScheme';
import SaveScreen from 'views/Root/SaveScreen';
import IconShare from 'src/assets/IconShare';
import {View} from 'components/Themed';
import IconBookmark from 'src/assets/IconBookmark';
import useFavouriteStore from 'src/store/favouriteStore';

export default function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const theme = useColorScheme();
  const toggleFavourite = useFavouriteStore(state => state.toggleFavourite);
  const favourites = useFavouriteStore(state => state.favourites);

  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
    },
    pressable: {
      marginRight: 8,
    },
  });

  return (
    <Stack.Navigator
      initialRouteName="TopTabs"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
        },
        headerTitleStyle: {
          color: theme === 'dark' ? '#fff' : '#000',
        },
        headerTintColor: '#FF6600',
      }}>
      <Stack.Screen
        name="TopTabs"
        component={TopTabs}
        options={({navigation}) => ({
          headerBackTitleVisible: false,
          title: 'News',
          headerRight: () => (
            <View style={style.container}>
              <Pressable
                style={style.pressable}
                onPress={() => {
                  navigation.navigate('Save');
                }}>
                <IconBookmark color="#ff6600" fillColor="#ff6600" />
              </Pressable>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="SinglePost"
        component={SinglePost}
        options={({route}) => ({
          headerBackTitleVisible: false,
          title: 'Post',
          headerRight: () => (
            <View style={style.container}>
              <Pressable
                style={style.pressable}
                onPress={() => {
                  toggleFavourite(route.params.story);
                }}>
                <IconBookmark
                  color="#ff6600"
                  fillColor={
                    favourites.some(
                      favourite => favourite.id === route.params.story.id,
                    )
                      ? '#ff6600'
                      : 'transparent'
                  }
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  Share.share({
                    message: `https://news.ycombinator.com/item?id=${route.params.story.id}`,
                  });
                }}>
                <IconShare color="#FF6600" />
              </Pressable>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: 'Oops!'}}
      />
      <Stack.Screen
        name="Save"
        component={SaveScreen}
        options={{
          title: 'Saved Stories',
        }}
      />
    </Stack.Navigator>
  );
}
