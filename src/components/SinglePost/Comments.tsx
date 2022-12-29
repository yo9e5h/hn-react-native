import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useComments} from 'src/hooks/useComments';
import {Story} from 'types/StoryTypes';
import StoryItem from './StoryItem';

const Comments = ({comments, story}: {comments: number[]; story: Story}) => {
  const {data, isLoading} = useComments(comments);

  console.log(data);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      padding: 10,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<StoryItem item={story} />}
        data={data}
        ItemSeparatorComponent={() => <View style={styles.text} />}
        renderItem={({item}) =>
          isLoading ? <ActivityIndicator /> : <Text>{item.text}</Text>
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Comments;
