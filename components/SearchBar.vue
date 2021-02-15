<template>
  <div class="search">
    <input type="search" placeholder="Enter A Movie Name..." @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(event) {
      this.$emit("termChange", event.target.value);
    },
  },
};
</script>

<style lang="postcss" scoped>
input[type="search"] {
  padding: 0 1.6rem;
  border: 1px solid gray;
  border-radius: var(--rad);
  height: 3rem;
  outline: 0;
  font-size: 1.2rem;
  box-shadow: 0px 4px 3px rgb(0 0 0 / 6%);

  &::placeholder {
    color: #808080;
    font-weight: 400;
  }
}
</style>
