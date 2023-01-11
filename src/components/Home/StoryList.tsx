import {FlashList} from '@shopify/flash-list';
import NewsListItem from './NewsListItem';
import React from 'react';
import {View} from 'components/Themed';
import {StyleSheet} from 'react-native';

const StoryList = ({
  data,
  refreshing,
  onRefresh,
}: {
  data?: readonly any[] | null | undefined;
  refreshing: boolean;
  onRefresh: () => void;
}) => {
  const style = StyleSheet.create({
    height: {height: 1},
  });

  return (
    <FlashList
      data={data}
      renderItem={({item}) => <NewsListItem item={item} />}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View style={style.height} darkColor="#1f2937" lightColor="#e5e7eb" />
      )}
      estimatedItemSize={100}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default StoryList;
