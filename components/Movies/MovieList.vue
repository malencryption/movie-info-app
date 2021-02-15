<template>
  <section class="movie-list">
    <div>Movie List</div>
    <Movie
      v-for="movie in movies"
      :id="movie.node.id"
      :key="movie.node.id"
      :title="movie.node.title"
      :year="movie.node.releaseDate"
      :movie="movie.node"
      class-name="movie"
    />
  </section>
</template>
<script>
import Movie from "@/components/Movies/Movie";

export default {
  components: {
    Movie,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 40px -20px;
}
</style>
