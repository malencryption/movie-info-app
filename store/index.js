import Vuex from "vuex";
import moviesGql from "@/apollo/queries/getMovies.gql";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedMovies: [],
      selectedMovie: {},
    },
    mutations: {
      setMovies(state, movies) {
        state.loadedMovies = movies;
      },
    },
    actions: {
      nuxtServerInit({ commit }, { error }) {
        const clientApollo = this.app.apolloProvider.defaultClient;
        return new Promise((resolve, reject) => {
          clientApollo
            .query({
              query: moviesGql,
            })
            .then((resp) => {
              commit("setMovies", resp.data.movies.popular.edges);
              resolve(resp);
            })
            .catch((err) => {
              resolve(err);
            });
        });
      },
      setMovies(vuexContext, movies) {
        vuexContext.commit("setMovies", movies);
      },
    },
    getters: {
      loadedMovies(state) {
        return state.loadedMovies;
      },
    },
  });
};

export default createStore;
