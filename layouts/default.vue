<template>
  <div>
    <TheHeader class-name="logo">Movie Info App</TheHeader>
    <Nuxt />
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
  font-family: "Comic Neue", sans-serif;
  margin: 1rem 0;
}

img.img-fluid {
  width: 100%;
}
</style>
