import {StyleSheet, View} from 'react-native';
import React from 'react';
import {usePosts} from 'src/hooks/usePosts';
import LoadingScreen from 'components/LoadingScreen';
import StoryList from 'components/Home/StoryList';

const Show = () => {
  const [page, setPage] = React.useState<number>(0);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const {data, isLoading, refetch} = usePosts(page, 'show');

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
      <StoryList
        hasUrl={true}
        isJob={false}
        data={data}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default Show;
