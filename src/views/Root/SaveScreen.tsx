import {Text, View} from 'components/Themed';
import {StyleSheet} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import useFavouriteStore from 'src/store/favouriteStore';
import NewsListItem from 'components/Home/NewsListItem';

const SaveScreen = () => {
  const favourites = useFavouriteStore(state => state.favourites);

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: '500',
      color: '#8b949e',
    },
    height: {height: 1},
    flashListContainer: {
      flex: 1,
    },
  });

  if (favourites.length === 0) {
    return (
      <View style={style.container}>
        <Text style={style.text}>
          Nothing here, Read something and check later.
        </Text>
      </View>
    );
  }

  return (
    <View style={style.flashListContainer}>
      <FlashList
        data={favourites}
        renderItem={({item}) => <NewsListItem item={item} />}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={style.height} darkColor="#1f2937" lightColor="#e5e7eb" />
        )}
        estimatedItemSize={100}
      />
    </View>
  );
};

export default SaveScreen;
