import { createStore } from "vuex";

import { getAllMoviesBySearch } from "@/data-providers/movieLibraryDataProvider.js"
import { getParseSearch } from "@/computation/data-parser";

export default createStore({
  state() {
    return {
      filmsToShow: [],
      favouriteFilms: [
        {
          id: 'FAV001',
          title: 'Batman Returns',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis, beatae facere quos corrupti quia veritatis tempora molestias ut asperiores iure omnis voluptatem laborum. Quam soluta qui iste ducimus delectus.',
          imgUrl: 'src/assets/Images/Batman.jpg',
          selected: true,
        },
        {
          id: 'FAV002',
          title: 'Wild Wild West',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis, beatae facere quos corrupti quia veritatis tempora molestias ut asperiores iure omnis voluptatem laborum. Quam soluta qui iste ducimus delectus.',
          imgUrl: 'src/assets/Images/Wild West.jpg',
          selected: true
        },
        {
          id: 'FAV003',
          title: 'The Amazing Spiderman',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis, beatae facere quos corrupti quia veritatis tempora molestias ut asperiores iure omnis voluptatem laborum. Quam soluta qui iste ducimus delectus.',
          imgUrl: 'src/assets/Images/Spiderman.jpg',
          selected: true
        }
      ],
      queryOfUser: "",
    };
  },
  getters: {},
  mutations: {
    setFilms(state, newFilms) {
      state.filmsToShow = newFilms;
    },
    setNewFavouriteFilms(state, newFavouriteFilms) {
      state.favouriteFilms = newFavouriteFilms;
    },
    setQueryOfUser(state, queryOfUser) {
      state.queryOfUser = queryOfUser;
    },
  },
  actions: {
    async search({ state, commit, dispatch }, query){
      // data provider to make a call in external api
      const response = await getAllMoviesBySearch({queryStr: query});
      console.log('response ---> ',response)
      const newFilmsToShow = getParseSearch({responseList: response, favouriteFilms: state.favouriteFilms});
      commit("setFilms", newFilmsToShow );
    },
  },
});
