import {Story} from 'types/StoryTypes';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type favouriteState = {
  favourites: Story[];
  toggleFavourite: (story: Story) => Promise<void>;
};

const useFavouriteStore = create<favouriteState>()(
  persist(
    (set, get) => ({
      favourites: [],
      toggleFavourite: async (story: Story) => {
        const {favourites} = get();
        const isFavourite = favourites.find(fav => fav.id === story.id);
        if (isFavourite) {
          set({
            favourites: favourites.filter(fav => fav.id !== story.id),
          });
        } else {
          set({
            favourites: [...favourites, story],
          });
        }
      },
    }),
    {
      name: 'auth',
      getStorage: () => AsyncStorage,
    },
  ),
);

export default useFavouriteStore;
