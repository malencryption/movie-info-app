import Vuex from "vuex";
import moviesGql from "@/apollo/queries/getMovies.gql";
import movieByIdGql from "@/apollo/queries/getMovieById.gql";

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
      selectMovie(state, movie) {
        state.selectedMovie = movie;
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
      selectMovie(vuexContext, movie) {
        vuexContext.commit("selectMovie", movie);
      },
      getMovieById({ commit }, movieId) {
        const clientApollo = this.app.apolloProvider.defaultClient;
        return new Promise((resolve, reject) => {
          clientApollo
            .query({
              query: movieByIdGql,
              variables: {
                id: movieId,
              },
            })
            .then((resp) => {
              commit("selectMovie", resp.data.movies.movie);
              resolve(resp);
            })
            .catch((err) => {
              resolve(err);
            });
        });
      },
    },
    getters: {
      loadedMovies(state) {
        return state.loadedMovies;
      },
      selectedMovie(state) {
        return state.selectedMovie;
      },
    },
  });
};

export default createStore;
