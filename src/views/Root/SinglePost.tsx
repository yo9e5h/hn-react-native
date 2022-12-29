import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from 'types/NavigationTypes';
import Comments from 'components/SinglePost/Comments';

const SinglePost = ({
  navigation,
  route,
}: RootStackScreenProps<'SinglePost'>) => {
  const params = route.params;

  console.log(navigation);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Comments story={params.story} comments={params.story.kids} />
    </View>
  );
};

export default SinglePost;
