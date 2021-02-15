<template>
  <section :class="className">
    <!-- <nuxt-link :to="'/movie/' + movie.id" class="card" @click="onMovieSelect"> -->
    <div class="card" @click="onMovieSelect">
      <div class="card-body">
        <div v-if="movie.poster" class="poster">
          <img class="img-fluid" :src="movie.poster" :alt="movie.title" />
        </div>
        <div class="movie-details">
          <h2>{{ movie.title }}</h2>
          <div v-if="movie.genre" class="genre">
            <h3>Genre: &nbsp;</h3>
            <span v-for="g in movie.genre" :key="g"> {{ g }}</span>
          </div>
          <div v-if="movie.releaseDate" class="year">
            <h3>
              Release Date:
              {{ new Date(movie.releaseDate).getFullYear() }}
            </h3>
          </div>
          <div v-if="movie.overview" class="overview">
            <h3>Overview:</h3>
            <p class="line-clamp line-clamp-3">{{ movie.overview }}</p>
          </div>
          <div v-if="detail">
            <div v-if="movie.rating" class="rating">
              <h3>Rating: &nbsp;</h3>
              {{ movie.rating }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </nuxt-link> -->
  </section>
</template>
<script>
export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      required: true,
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
.movie-preview {
  border: 1px solid --red;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
}

.movie-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.card {
  background: white;
  border-radius: var(--rad);

  & h2 {
    margin-top: 0;
  }
}

.movie-details {
  padding: 20px;
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

.line-clamp-3 {
  -webkit-line-clamp: 3;
  height: calc(1em * 1.2 * 3);
}
</style>
