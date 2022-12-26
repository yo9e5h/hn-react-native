import {StyleSheet, View} from 'react-native';
import React from 'react';
import {usePosts} from 'src/hooks/usePosts';
import NewsListItem from 'components/NewsListItem';
import {FlashList} from '@shopify/flash-list';
import LoadingScreen from 'components/LoadingScreen';

const Jobs = () => {
  const [page, setPage] = React.useState<number>(0);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const {data, isLoading, refetch} = usePosts(page, 'job');

  if (isLoading) {
    return <LoadingScreen />;
  }

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(0);
    refetch().then(() => {
      setRefreshing(false);
    });
  };

  const loadMore = () => {
    refetch();
  };

  const style = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={style.container}>
      <FlashList
        data={data}
        renderItem={({item}) => <NewsListItem item={item} />}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={100}
        refreshing={refreshing}
        onRefresh={() => {
          handleRefresh();
        }}
        onEndReached={() => {
          loadMore();
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default Jobs;
