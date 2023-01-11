import {StyleSheet} from 'react-native';
import React from 'react';
import {usePosts} from 'src/hooks/usePosts';
import LoadingScreen from 'components/LoadingScreen';
import StoryList from 'components/Home/StoryList';
import {View} from 'components/Themed';

const New = () => {
  const [page, setPage] = React.useState<number>(0);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const {data, isLoading, refetch} = usePosts(page, 'new');

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

  const style = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={style.container}>
      <StoryList
        data={data}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default New;
