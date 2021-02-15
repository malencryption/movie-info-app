<template>
  <div class="container">
    <Movie :movie="movie" detail class-name="movie" />
  </div>
</template>

<script>
import Movie from "@/components/Movies/Movie";
import { mapState, mapActions } from "vuex";
import movieByIdGql from "@/apollo/queries/getMovieById.gql";

export default {
  components: {
    Movie,
  },
  props: {
    movie: {
      type: Object,
      required: true,
      default: () => ({
        id: "36",
        title: "Princess Bride",
        releaseDate: "1986",
        rating: "10",
      }),
    },
  },
  computed: {
    ...mapState({
      selectedMovie: (state) => state.selectedMovie,
    }),
  },
  apollo: {
    movie: {
      query: movieByIdGql,
      variables() {
        return { id: this.$route.params };
      },
      update(data) {
        return data.movies.movie;
      },
    },
  },
  // beforeCreated() {
  //   this.getMovieById(this.$route.params);
  // },
  methods: {
    ...mapActions(["selectMovie", "getMovieById"]),
    onMovieSelect(movie) {
      // console.log("Movie Selected!" + JSON.stringify(movie));
      this.selectMovie(movie);
    },
  },
};
</script>
