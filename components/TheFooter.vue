<template>
  <footer>
    © {{ new Date().getFullYear() }}&nbsp;
    <span class="color-syellow">Movie Info App</span>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: var(--red);
  padding: 0 20px;
  color: white;
}
.color-syellow {
  color: var(--soft-yellow);
}
</style>
