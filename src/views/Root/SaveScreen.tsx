import {Text, View} from 'components/Themed';
import {StyleSheet} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import useFavouriteStore from 'src/store/favouriteStore';
import NewsListItem from 'components/Home/NewsListItem';

const SaveScreen = () => {
  const favourites = useFavouriteStore(state => state.favourites);

  if (favourites.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#8b949e',
          }}>
          Nothing here, Read something and check later.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={favourites}
        renderItem={({item}) => <NewsListItem item={item} />}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{height: 1}} darkColor="#1f2937" lightColor="#e5e7eb" />
        )}
        estimatedItemSize={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SaveScreen;
