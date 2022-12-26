import {Button, Text, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from 'types/NavigationTypes';

const SinglePost = ({
  navigation,
  route,
}: RootStackScreenProps<'SinglePost'>) => {
  const params = route.params;

  return (
    <View>
      <Text>SinglePost</Text>
      <Text>{params.id}</Text>
      <Button
        title="Back to TopTabs"
        onPress={() => {
          navigation.navigate('TopTabs');
        }}
      />
    </View>
  );
};

export default SinglePost;
