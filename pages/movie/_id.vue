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
};
</script>
