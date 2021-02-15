<template>
  <div>
    <TheHeader class-name="logo">Movie Info App</TheHeader>
    <Nuxt />
    <div class="scrollToTopBtn"><font-awesome-icon icon="arrow-up" /></div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="postcss">
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

/* Breakpoints */
@custom-media --sm (width >= 576px);
@custom-media --md (width >= 786px);
@custom-media --lg (width >= 992px);
@custom-media --xl (width >= 1200px);

html,
input {
  font-family: "Montserrat", sans-serif;
  font-size: responsive;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

:--heading {
  margin: 1rem 0;
}

h1,
h2 {
  font-size: 1.8em;
}

img.img-fluid {
  width: 100%;
}

.scrollToTopBtn {
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  color: white;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 100;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0px 1px 5px 2px rgb(0 0 0 / 30%);
  }
}

.showBtn {
  opacity: 1;
  transform: translateY(0);
}

.backHome {
  font-size: 1.2rem;
  padding: 15px 0;
}
.container {
  margin: 80px auto 0;
  padding: 0 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (--sm) {
  .container {
    max-width: 540px;
  }
  h1 {
    font-size: 2em;
  }
}
@media (--md) {
  .container {
    max-width: 760px;
  }
}
@media (--lg) {
  .container {
    max-width: 960px;
  }
}
@media (--xl) {
  .container {
    max-width: 1140px;
  }
}
</style>
