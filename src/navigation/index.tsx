import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {RootStackParamList} from 'types/NavigationTypes';
import TopTabs from './TopTabs';
import SinglePost from 'views/Root/SinglePost';

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
      <Stack.Screen name="SinglePost" component={SinglePost} />
    </Stack.Navigator>
  );
}
