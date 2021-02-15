<template>
  <header>
    <div :class="className">
      <h1>
        <nuxt-link to="/"><slot /></nuxt-link>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    className: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--red);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.5rem;
  animation: 1s appear;

  & a {
    text-decoration: none;
    color: white;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
