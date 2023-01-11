import {Story} from 'types/StoryTypes';
import {create} from 'zustand';

type favouriteState = {
  favourites: Story[];
  toggleFavourite: (story: Story) => void;
};

const useFavouriteStore = create<favouriteState>((set, get) => ({
  favourites: [],

  toggleFavourite: (story: Story) => {
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
}));

export default useFavouriteStore;
