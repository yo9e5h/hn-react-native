import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {useComments} from 'src/hooks/useComments';
import {CommentType} from 'types/StoryTypes';
import Comment from './Comment';
import {FlashList} from '@shopify/flash-list';
import {View} from 'components/Themed';
import useColorScheme from 'hooks/useColorScheme';

const Comments = ({comments}: {comments: number[]}) => {
  const theme = useColorScheme();
  const {data, isLoading} = useComments(comments);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      height: 1,
      backgroundColor: theme === 'dark' ? '#1f2937' : '#e5e7eb',
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    comment: {
      padding: 8,
    },
    time: {
      color: '#6b7280',
      fontSize: 12,
      paddingVertical: 2,
    },
  });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => <View style={styles.text} />}
        renderItem={({item}: {item: CommentType}) => <Comment comment={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Comments;
