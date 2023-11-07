<script setup>
import { ref, reactive } from "vue";
import CustomerTop from "./components/CustomerTop.vue";
import CustomerList from "./components/CustomerList.vue";
</script>

<template>
  <header>
    <CustomerTop />
    <CustomerList>
      <h3>사용자 목록</h3>
    </CustomerList>
  </header>

  <main></main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
