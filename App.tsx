/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Navigation from 'src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StatusBar} from 'react-native';
import useColorScheme from 'src/hooks/useColorScheme';

const App = () => {
  const queryClient = new QueryClient();
  const theme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigation />
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
