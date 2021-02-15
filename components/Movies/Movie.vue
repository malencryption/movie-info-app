<template>
  <section :class="className" @click="onMovieSelect">
    <nuxt-link event="" :to="'/movie/' + movie.id" class="card">
      <div class="card-body">
        <div v-if="movie.poster" class="poster">
          <img class="img-fluid" :src="movie.poster" :alt="movie.title" />
        </div>
        <div class="movie-details">
          <h2 class="line-clamp line-clamp-1">{{ movie.title }}</h2>
          <div v-if="movie.details.genres != '' && detail" class="genre">
            <h3>Genre: &nbsp;</h3>
            <span v-for="genre in movie.details.genres" :key="genre.id">
              {{ genre.name }}</span
            >
          </div>
          <div v-if="movie.releaseDate != '' && detail" class="year">
            <h3>
              Release Date:
              {{ new Date(movie.releaseDate).getFullYear() }}
            </h3>
          </div>
          <div v-if="movie.overview" class="overview">
            <h3 v-if="detail">Overview:</h3>
            <p class="line-clamp line-clamp-4">{{ movie.overview }}</p>
          </div>
          <div v-if="detail">
            <div v-if="movie.rating" class="rating">
              <h3>Rating: &nbsp;</h3>
              {{ movie.rating }}
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>
<script>
export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      required: true,
      default: () => ({
        id: "1",
        title: "test",
        rating: "10",
        details: {},
      }),
    },
    detail: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "",
      require: false,
    },
  },
  methods: {
    onMovieSelect(e) {
      this.$emit("movieSelect", this.movie);
    },
  },
};
</script>

<style lang="postcss" scoped>
a.card {
  text-decoration: none;
  color: #000;
}

.card {
  background: white;
  border-radius: var(--rad);

  & h2 {
    margin-top: 0;
  }
}

.line-clamp {
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;

  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 !important;
}

.line-clamp-1 {
  -webkit-line-clamp: 1;
  height: calc(1em * 1.2 * 1);
}

.line-clamp-4 {
  -webkit-line-clamp: 4;
  height: calc(1em * 1.2 * 4);
}
</style>
