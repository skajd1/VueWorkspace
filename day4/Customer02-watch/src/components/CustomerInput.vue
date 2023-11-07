<script setup>
import { ref, reactive, watchEffect } from "vue";
const num = ref("");
const name = ref("");
const address = ref("");

const props = defineProps(["customer"]);
watchEffect(() => {
  num.value = props.customer.num;
  name.value = props.customer.name;
  address.value = props.customer.address;
}, props.customer);
const emit = defineEmits([
  "customerInsert",
  "customerUpdate",
  "customerDelete",
  "customerSearch",
  "customerAll",
]);

function customerInsert() {
  emit("customerInsert", {
    num: num.value,
    name: name.value,
    address: address.value,
  });
}
function customerDelete() {
  emit("customerDelete", num.value);
}
function customerSearch() {
  emit("customerSearch", {
    name: name.value,
  });
}
function customerUpdate() {
  emit("customerUpdate", {
    num: num.value,
    address: address.value,
  });
}
function customerAll() {
  emit("customerAll");
}
</script>

<template>
  <div>
    <div class="container">
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
            value="수정"
            id="btnUpdate"
            @click="customerUpdate"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="삭제"
            id="btnDelete"
            @click="customerDelete"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="검색"
            id="btnUpdate"
            @click="customerSearch"
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
    <hr />
  </div>
</template>

<style scoped></style>
