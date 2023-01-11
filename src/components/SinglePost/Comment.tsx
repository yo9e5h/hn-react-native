import {StyleSheet} from 'react-native';
import {CommentType} from 'types/StoryTypes';
import React from 'react';
import useTime from 'src/hooks/useTime';
import {View, Text} from 'components/Themed';
import RenderHTML from 'react-native-render-html';
import useColorScheme from 'hooks/useColorScheme';
import Comments from './Comments';

const Comment = ({comment}: {comment: CommentType}) => {
  const theme = useColorScheme();
  const time = useTime(comment.time);
  const source = {
    html: comment.text,
  };

  const styles = StyleSheet.create({
    container: {
      padding: 8,
      borderLeftWidth: 1,
      borderLeftColor: '#FF6600',
    },
    time: {
      fontSize: 12,
      paddingTop: 2,
    },
    labelText: {
      fontSize: 12,
      paddingVertical: 2,
    },
    html: {
      color: theme === 'dark' ? '#d1d5db' : '#1f2937',
      fontSize: 14,
      paddingTop: 2,
    },
  });

  return (
    <View style={styles.container}>
      {comment.deleted && (
        <Text style={styles.html} darkColor="#6b7280" lightColor="#6b7280">
          [deleted] • {time}
        </Text>
      )}
      {!comment.deleted && (
        <Text style={styles.time} darkColor="#6b7280" lightColor="#6b7280">
          {comment.by} • {time}
        </Text>
      )}
      <RenderHTML
        baseStyle={styles.html}
        key={comment.id}
        contentWidth={50}
        source={source}
      />
      {comment.kids && (
        <>
          <Text
            style={{
              marginBottom: 4,
              ...styles.labelText,
            }}
            darkColor="#6b7280"
            lightColor="#6b7280">
            {comment.kids.length === 1
              ? `${comment.kids.length} reply`
              : `${comment.kids.length} replies`}
          </Text>
          <Comments comments={comment.kids} />
        </>
      )}
    </View>
  );
};

export default Comment;
