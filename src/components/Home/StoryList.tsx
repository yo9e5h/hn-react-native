import {FlashList} from '@shopify/flash-list';
import NewsListItem from './NewsListItem';
import React from 'react';
import {View} from 'components/Themed';

const StoryList = ({
  data,
  refreshing,
  onRefresh,
}: {
  data?: readonly any[] | null | undefined;
  refreshing: boolean;
  onRefresh: () => void;
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
    />
  );
};

export default StoryList;
