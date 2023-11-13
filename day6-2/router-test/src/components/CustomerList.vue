<script setup>
import CustomerListItem from "@/components/CustomerListItem.vue";
import { useCustomerStore } from "@/stores/customerStore";
import { storeToRefs } from "pinia";

const store = useCustomerStore();
const { allCustomer } = store;
const { all: customers, one } = storeToRefs(store);

allCustomer();
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
            <!-- <th class="text-center">주소</th> -->
          </tr>
        </thead>
        <tbody id="tb">
          <CustomerListItem v-for="customer in customers" :c="customer" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
