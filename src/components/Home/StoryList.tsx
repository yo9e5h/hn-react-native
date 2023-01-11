import {FlashList} from '@shopify/flash-list';
import NewsListItem from './NewsListItem';
import React from 'react';
import {View} from 'components/Themed';

const StoryList = ({
  data,
  refreshing,
  onRefresh,
  onEndReached,
}: {
  data?: readonly any[] | null | undefined;
  refreshing: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
}) => {
  return (
    <FlashList
      data={data}
      renderItem={({item}) => <NewsListItem item={item} />}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View style={{height: 1}} darkColor="#1f2937" lightColor="#e5e7eb" />
      )}
      estimatedItemSize={100}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default StoryList;
