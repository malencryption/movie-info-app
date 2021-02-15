<template>
  <section class="movie-list">
    <h2 class="list-title">Popular Movies</h2>
    <Movie
      v-for="movie in movies"
      :key="movie.node.id"
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
  },
  methods: {
    onMovieSelect(movie) {
      // console.log("Selected Movie");
      this.$emit("movieSelect", movie);
    },
  },
};
</script>

<style lang="postcss" scoped>
.movie-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 40px 0px 20px;
}

@media (--md) {
  .movie-list {
    margin: 40px -20px;
  }
  .movie {
    margin: 20px;
  }
}

.list-title {
  width: 100%;
  display: flex;
  justify-content: center;
}

.movie {
  border: 1px solid var(--red);
  border-radius: var(--rad);
  overflow: hidden;
  width: 350px;
  margin: 20px 0 0;
}
</style>
