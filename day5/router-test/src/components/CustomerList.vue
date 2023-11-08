<script setup>
import { ref, onMounted } from "vue";
import {
  selectAll,
  selectOne,
  insert,
  deleteOne,
  update,
  searchByAddress,
} from "../api/customer.js";
const customers = ref([]);

onMounted(() => {
  getAll();
});
function getAll() {
  selectAll(
    (res) => {
      customers.value = res.data;
    },
    (e) => {
      console.log(e);
    }
  );
}
</script>
<template>
  <div>
    <div class="container">
      <slot></slot>
      <table class="table text-center">
        <thead>
          <tr>
            <th class="text-center">번호</th>
            <th class="text-center">이름</th>
            <th class="text-center">주소</th>
          </tr>
        </thead>
        <tbody id="tb"></tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
