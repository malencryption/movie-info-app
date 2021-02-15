<template>
  <div class="container">
    <div class="intro">
      <p>
        Welcome to the Movie Info App! Search for a movie and click on the card
        to view the details.
      </p>
    </div>
    <SearchBar />
    <!-- <div v-if="$apollo.queries.movies.loading">I am still loading</div> -->
    <MovieList :movies="loadedMovies" @movieSelect="onMovieSelect" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/Movies/MovieList";
// import moviesGql from "@/apollo/queries/getMovies.gql";
import { mapState } from "vuex";

export default {
  components: {
    SearchBar,
    MovieList,
  },
  data() {
    return { selectedMovie: null };
  },
  computed: {
    ...mapState({
      loadedMovies: (state) => state.loadedMovies,
    }),
  },
  // apollo: {
  //   movies: {
  //     prefetch: true,
  //     query: moviesGql,
  //     update(data) {
  //       console.log(data);
  //       return data.movies.popular.edges;
  //     },
  //     error(error) {
  //       console.error("We've got an error!", error);
  //     },
  //   },
  // },
  methods: {
    onMovieSelect(movie) {
      console.log("Movie Selected!" + JSON.stringify(movie));
      this.selectedMovie = movie;
    },
  },
};
</script>

<style lang="postcss">
.container {
  margin: 80px auto 0;
  padding: 0 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro {
  padding-top: 30px;
  margin-bottom: 20px;
  font-size: 1.2rem;
}

@media (--sm) {
  .container {
    max-width: 540px;
  }
}
@media (--md) {
  .container {
    max-width: 540px;
  }
  .intro {
    padding-top: 50px;
  }
}
@media (--lg) {
  .container {
    max-width: 720px;
  }
}
@media (--xl) {
  .container {
    max-width: 960px;
  }
}
</style>
