<template>
  <div class="container">
    <div class="intro">
      <p>
        Welcome to the Movie Info App! Search for a movie and click on the card
        to view the details.
      </p>
    </div>
    <SearchBar />
    <div v-if="$apollo.queries.movies.loading">I am still loading</div>
    <MovieList v-else :movies="movies" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/Movies/MovieList";
import moviesGql from "@/apollo/queries/getMovies.gql";

export default {
  components: {
    SearchBar,
    MovieList,
  },
  apollo: {
    movies: {
      prefetch: true,
      query: moviesGql,
      update(data) {
        console.log(data);
        return data.movies.popular.edges;
      },
      error(error) {
        console.error("We've got an error!", error);
      },
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
@media (--sm) {
  .container {
    max-width: 540px;
  }
}
@media (--md) {
  .container {
    max-width: 540px;
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

.intro {
  padding-top: 50px;
  margin-bottom: 20px;
  font-size: 1.2rem;
}
</style>
