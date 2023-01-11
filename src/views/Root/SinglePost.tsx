import {StyleSheet} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from 'types/NavigationTypes';
import Comments from 'components/SinglePost/Comments';
import StoryItem from 'components/SinglePost/StoryItem';
import {View} from 'components/Themed';

const SinglePost = ({route}: RootStackScreenProps<'SinglePost'>) => {
  const params = route.params;

  console.log(params.story);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <StoryItem item={params.story} />
      <Comments comments={params.story.kids} />
    </View>
  );
};

export default SinglePost;
