<template>
  <div class="container">
    <Movie :movie="movie" detail class-name="movie" />
  </div>
</template>

<script>
import Movie from "@/components/Movies/Movie";

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
};
</script>
