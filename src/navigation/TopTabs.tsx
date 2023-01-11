import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ask from 'views/Tabs/Ask';
import Top from 'views/Tabs/Top';
import React from 'react';
import {TopTabParamList} from 'types/NavigationTypes';
import Show from 'views/Tabs/Show';
import Jobs from 'views/Tabs/Jobs';
import New from 'views/Tabs/New';
import useColorScheme from 'hooks/useColorScheme';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

function TopTabs() {
  const theme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
        },
        tabBarActiveTintColor: '#FF6600',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: {backgroundColor: '#FF6600'},
        tabBarLabelStyle: {
          textTransform: 'none',
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen name="Top" component={Top} />
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Ask" component={Ask} />
      <Tab.Screen name="Show" component={Show} />
      <Tab.Screen name="Jobs" component={Jobs} />
    </Tab.Navigator>
  );
}

export default TopTabs;
