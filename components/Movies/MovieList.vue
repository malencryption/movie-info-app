<template>
  <section class="movie-list">
    <h2 class="list-title">{{ listTitle }}</h2>
    <Movie
      v-for="(movie, index) in movies"
      :key="index"
      :movie="movie.node"
      class-name="movie"
      @movieSelect="onMovieSelect"
    />
  </section>
</template>
<script>
import Movie from "@/components/Movies/Movie";

export default {
  name: "MovieList",
  components: {
    Movie,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
    listTitle: {
      type: String,
      required: true,
      default: "Popular Movies",
    },
  },
  methods: {
    onMovieSelect(movie) {
      // console.log("Selected Movie");
      this.$emit("movieSelect", movie);
    },
  },
};
</script>

<style lang="postcss" scoped></style>
