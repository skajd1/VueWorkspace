<script setup>
import { ref, reactive, watchEffect } from "vue";
import CustomerInput from "./CustomerInput.vue";
import emit from "./CustomerInput.vue";
//v-model과 연결한 반응형 변수 선언

const customers = ref([]);
const p = reactive({
  num: "",
  name: "",
  address: "",
});
customers.value = JSON.parse(localStorage.getItem("customers")) || [];
watchEffect(() => {
  updateData(customers.value);
});

function updateData() {
  localStorage.setItem("customers", JSON.stringify(customers.value));
}

const customers2 = ref([]);
customers2.value = customers.value;

function customerInsert(newCustomer) {
  customers.value.push(newCustomer);
}
function customerDelete(snum) {
  const index = customers.value.findIndex((c) => c.num === snum);
  customers.value.splice(index, 1);
}
function customerSelectOne(snum) {
  const customer = customers.value.find((c) => c.num === snum);
  console.log(customer);
  // 자식(input vue) 로 보내야함
  p.num = customer.num;
  p.name = customer.name;
  p.address = customer.address;
}
function customerUpdate(info) {
  const index = customers.value.findIndex((c) => c.num === parseInt(info.num));
  customers.value[index].address = info.address;
}
function customerSearch(sname) {
  init();
  const tmp = [];
  customers.value.find((c) => {
    if (c.name.includes(sname.name)) {
      tmp.push(c);
    }
  });
  customers.value = tmp;
}

function init() {
  customers.value = customers2.value;
}
</script>

<template>
  <div>
    <div class="container">
      <CustomerInput
        :customer="p"
        @customerInsert="customerInsert"
        @customerDelete="customerDelete"
        @customerUpdate="customerUpdate"
        @customerSearch="customerSearch"
        @customerAll="init"
      >
        <template #list>
          <h3>사용자 입력</h3>
        </template>
      </CustomerInput>
      <h3>사용자 목록</h3>
      <table class="table text-center">
        <thead>
          <tr>
            <th class="text-center">번호</th>
            <th class="text-center">이름</th>
            <th class="text-center">주소</th>
          </tr>
        </thead>
        <tbody id="tb">
          <tr v-for="c in customers" :key="c.num" @click="customerSelectOne(c.num)">
            <td>{{ c.num }}</td>
            <td>{{ c.name }}</td>
            <td v-text="c.address"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
