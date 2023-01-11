import zustand from 'zustand';

type favouriteState = {
  favourites: number[];
  addFavourite: (id: number) => void;
  removeFavourite: (id: number) => void;
};

const useFavouriteStore = zustand<favouriteState>((set, get) => ({
  favourites: [],

  addFavourite: (id: number) => {
    const {favourites} = get();
    set({favourites: [...favourites, id]});
  },
  removeFavourite: (id: number) => {
    const {favourites} = get();
    set({favourites: favourites.filter(fav => fav !== id)});
  },
}));

export default useFavouriteStore;
