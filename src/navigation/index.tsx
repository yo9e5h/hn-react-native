import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {RootStackParamList} from 'types/NavigationTypes';
import TopTabs from './TopTabs';
import SinglePost from 'views/Root/SinglePost';
import NotFoundScreen from 'views/Root/NotFoundScreen';

export default function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="TopTabs"
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="TopTabs"
        component={TopTabs}
        options={{
          title: 'News',
        }}
      />
      <Stack.Screen
        name="SinglePost"
        component={SinglePost}
        options={{
          headerTintColor: '#FF6600',
          headerTitleStyle: {
            color: '#000',
          },
          headerBackTitleVisible: false,
          title: 'Post',
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: 'Oops!'}}
      />
    </Stack.Navigator>
  );
}
