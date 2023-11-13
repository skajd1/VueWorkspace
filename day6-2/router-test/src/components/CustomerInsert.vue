<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCustomerStore } from "@/stores/customerStore";

const router = useRouter();

const num = ref("");
const name = ref("");
const address = ref("");
const store = useCustomerStore();
const { insertCustomer } = store;

function customerAll() {
  router.push("/list");
}
function customerInsert() {
  insertCustomer(num.value, name.value, address.value);

  router.push("/list");
}
</script>

<template>
  <div>
    <div class="container">
      <slot></slot>
      <form id="form1" class="form-horizontal">
        <slot name="list"></slot>
        <div class="form-group">
          <label>번호:</label> <input type="text" class="form-control" id="num" v-model="num" />
        </div>
        <div class="form-group">
          <label>이름:</label> <input type="text" class="form-control" id="name" v-model="name" />
        </div>

        <div class="form-group">
          <label>주소:</label>
          <input type="text" class="form-control" id="address" v-model="address" />
        </div>

        <div class="btn-group">
          <input
            type="button"
            class="btn btn-primary"
            value="등록"
            id="btnInsert"
            @click="customerInsert"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="전체"
            id="btnUpdate"
            @click="customerAll"
          />
          <input type="reset" class="btn btn-primary" value="초기화" id="btnInit" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
