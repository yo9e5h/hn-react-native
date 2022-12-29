import {FlashList} from '@shopify/flash-list';
import NewsListItem from './NewsListItem';
import React from 'react';

const StoryList = ({
  data,
  refreshing,
  onRefresh,
  onEndReached,
  isJob,
  hasUrl,
}: {
  data?: readonly any[] | null | undefined;
  refreshing: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
  isJob: boolean;
  hasUrl: boolean;
}) => {
  return (
    <FlashList
      data={data}
      renderItem={({item}) => (
        <NewsListItem hasUrl={hasUrl} isJob={isJob} item={item} />
      )}
      keyExtractor={item => item.id.toString()}
      estimatedItemSize={100}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default StoryList;
