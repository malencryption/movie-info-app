<template>
  <div class="container">
    <div class="intro">
      <p>
        Welcome to the Movie Info App! Search for a movie and click on the card
        to view the details.
      </p>
      <SearchBar />
      <MovieList />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/Movies/MovieList";

export default {
  components: {
    SearchBar,
    MovieList,
  },
};
</script>

<style lang="postcss">
.container {
  margin: 60px auto 0;
  padding: 0 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
</style>
