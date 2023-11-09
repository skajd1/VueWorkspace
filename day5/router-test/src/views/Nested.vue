<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h2>여기는 네스트뷰(Parent)</h2>
  <nav>
    <RouterLink to="/west">go west</RouterLink>
    <RouterLink to="/east">go east</RouterLink>
  </nav>

  <div>
    <RouterView />
  </div>
</template>
<style>
nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 2rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
