<script setup></script>

<template>
  <tr v-for="c in customers" :key="c.num" @click="customerSelectOne(c.num)">
    <td>{{ c.num }}</td>
    <td>{{ c.name }}</td>
    <td v-text="c.address"></td>
  </tr>
</template>

<style scoped></style>
