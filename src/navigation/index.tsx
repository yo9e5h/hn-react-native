import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {RootStackParamList} from 'types/NavigationTypes';
import TopTabs from './TopTabs';
import SinglePost from 'views/Root/SinglePost';
import NotFoundScreen from 'views/Root/NotFoundScreen';
import {Pressable} from 'react-native';
import ShareSheet from 'views/Root/ShareSheet';
import useColorScheme from 'hooks/useColorScheme';
import SaveScreen from 'views/Root/SaveScreen';
import IconUser from 'src/assets/IconUser';
import IconShare from 'src/assets/IconShare';
import {View} from 'components/Themed';
import IconBookmark from 'src/assets/IconBookmark';

export default function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const theme = useColorScheme();
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
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Pressable
                style={{
                  marginRight: 8,
                }}
                onPress={() => {
                  navigation.navigate('Save');
                }}>
                <IconBookmark color={theme === 'dark' ? '#fff' : '#000'} />
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('NotFound');
                }}>
                <IconUser color={theme === 'dark' ? '#fff' : '#000'} />
              </Pressable>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="SinglePost"
        component={SinglePost}
        options={({route, navigation}) => ({
          headerBackTitleVisible: false,
          title: 'Post',
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('Share', {
                  story: route.params.story,
                });
              }}>
              <IconShare color="#FF6600" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: 'Oops!'}}
      />
      <Stack.Screen
        name="Share"
        component={ShareSheet}
        options={{
          title: 'Share',
          presentation: 'modal',
        }}
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
