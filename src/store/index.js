import { createStore } from "vuex";

import { getAllMoviesBySearch } from "@/data-providers/movieLibraryDataProvider.js"
import { getParseSearch } from "@/computation/data-parser";

export default createStore({
  state() {
    return {
      filmsToShow: [],
      queryOfUser: "",
      filterByUser: "",
    };
  },
  getters: {},
  mutations: {
    setFilms(state, newFilms) {
      state.filmsToShow = newFilms;
    },
    setQueryOfUser(state, queryOfUser) {
      state.queryOfUser = queryOfUser;
    },
    setFilterByUser(state, filterByUser) {
      state.filterByUser = filterByUser;
    },
  },
  actions: {
    async search({ state, commit, dispatch }, query){
      // data provider to make a call in external api
      const response = await getAllMoviesBySearch({queryStr: query});
      console.log('response ---> ',response)
      const newFilmsToShow = getParseSearch({responseList: response});
      commit("setFilms", newFilmsToShow );
    },
  },
});
