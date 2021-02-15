<template>
  <div class="container">
    <nuxt-link class="backHome" to="/">Back to List</nuxt-link>
    <Movie :movie="selectedMovie" detail class-name="movie" />
  </div>
</template>

<script>
import Movie from "@/components/Movies/Movie";
import { mapState } from "vuex";

export default {
  components: {
    Movie,
  },
  computed: {
    ...mapState({
      selectedMovie: (state) => state.selectedMovie,
    }),
  },
};
</script>

<style lang="postcss">
.card-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
}

.movie-details {
  margin-top: 20px;
}

@media (--md) {
  .poster,
  .movie-details {
    width: calc(50% - 15px);
  }
  .movie-details {
    margin-top: 0px;
  }
}
</style>
