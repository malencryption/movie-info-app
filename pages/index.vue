<template>
  <div class="container page">
    <div class="intro">
      <p>
        Welcome to the Movie Info App! Search for a movie and click on the card
        to view the details.
      </p>
    </div>
    <SearchBar @termChange="onTermChange" />
    <MovieList
      v-if="searchTerm != ''"
      :movies="searchResults"
      :list-title="listTitle"
      @movieSelect="onMovieSelect"
    />
    <div v-if="searchTerm != '' && searchResults.length === 0">No Results</div>
    <MovieList
      v-if="searchTerm === ''"
      :movies="loadedMovies"
      :list-title="listTitle"
      @movieSelect="onMovieSelect"
    />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/Movies/MovieList";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    SearchBar,
    MovieList,
  },
  data() {
    return {
      searchTerm: "",
      listTitle: "Popular Movies",
      searchResults: [],
    };
  },
  computed: {
    ...mapState({
      loadedMovies: (state) => state.loadedMovies,
    }),
  },
  methods: {
    ...mapActions(["selectMovie"]),
    onMovieSelect(movie) {
      // console.log("Movie Selected!" + JSON.stringify(movie));
      this.selectMovie(movie);
      this.$router.push({
        path: "/movie/" + movie.id,
        params: { id: movie.id },
      });
    },
    onTermChange(searchTerm) {
      // console.log("term change: " + searchTerm);
      this.searchTerm = searchTerm;
      this.listTitle = "Movie Results for " + searchTerm;
      this.searchResults = this.loadedMovies.filter((movie) => {
        return movie.node.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
    },
  },
};
</script>

<style lang="postcss">
.intro {
  padding-top: 30px;
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.movie-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 40px 0px 20px;
}

.list-title {
  width: 100%;
  display: flex;
  justify-content: center;
}

.page .movie {
  border: 1px solid var(--red);
  border-radius: var(--rad);
  overflow: hidden;
  width: 320px;
  margin: 20px 0 0;
}

.page .movie-details {
  padding: 20px;
}

@media (--sm) {
  .movie-list {
    margin: 40px -15px;
  }
  .page .movie {
    width: calc(50% - 30px);
    margin: 15px;
  }
}

@media (--md) {
  .intro {
    padding-top: 50px;
  }
  .movie-list {
    margin: 40px -20px;
  }
  .page .movie {
    width: calc(50% - 40px);
    margin: 20px;
  }
}
@media (--lg) {
  .page .movie {
    width: 320px;
  }
}
</style>
