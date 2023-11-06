<script setup>
import { ref } from "vue";
const customers = ref([]);
const num = ref("");
const name = ref("");
const address = ref("");



let customerTmp = localStorage.getItem("customerlist");
if (customerTmp) {
    customers.value = JSON.parse(customerTmp);
}
function customerInsert() {
    const new_customer = {
        num: num.value,
        name: name.value,
        address: address.value
    }
    customers.value.push(new_customer);
    localStorage.setItem("customerlist", JSON.stringify(customers.value));

}
function customerSelect(selectedNum) {
    const customer = customers.value.find((item) => {
        return item.num === selectedNum;
    });
    if (customer) {
        num.value = customer.num;
        name.value = customer.name;
        address.value = customer.address;
    }
}
function customerDelete() {
    //현재 선택된 번호의 customer 를 storage에서 삭제
    const index = customers.value.findIndex((item) => {
        return item.num === num.value;
    });
    if (index > -1) {
        customers.value.splice(index, 1);
        localStorage.setItem("customerlist", JSON.stringify(customers.value));
    }
}
</script>

<template>
    <div>
        <h1> Vue Customer Management</h1>
        킥킥,,,킥.,,,,,,,킥!!
        <div class="container">
            <form id="form1" class="form-horizontal">
                <h2>Spring Boot</h2>
                <div class="form-group">
                    <label>번호:</label>
                    <input type="text" class="form-control" id="num" v-model="num">
                </div>
                <div class="form-group">
                    <label>이름:</label>
                    <input type="text" class="form-control" id="name" v-model="name">
                </div>

                <div class="form-group">
                    <label>주소:</label>
                    <input type="text" class="form-control" id="address" v-model="address">
                </div>

                <div class="btn-group">
                    <input type="button" class="btn btn-primary" value="등록" id="btnInsert" @click="customerInsert()" />
                    <input type="button" class="btn btn-primary" value="수정" id="btnUpdate" @click="customerUpdate()" />
                    <input type="button" class="btn btn-primary" value="삭제" id="btnDelete" @click="customerDelete()" />
                    <input type="button" class="btn btn-primary" value="검색" id="btnSearch" @click="customerSearch()" />
                    <input type="button" class="btn btn-primary" value="전체" id="btnAll" @click="selectAll()" />
                    <input type="reset" class="btn btn-primary" value="초기화" id="btnInit" />

                </div>
            </form>
        </div>
        <hr />
        <div class="container">
            <h2>사용자 목록</h2>
            <div v-if="customers.length > 0">
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th class="text-center">번호</th>
                            <th class="text-center">이름</th>
                            <th class="text-center">주소</th>
                        </tr>
                    </thead>
                    <tbody id="tb">
                        <tr v-for="customer in customers" :key="customer.num" @click="customerSelect(customer.num)">
                            <td>{{ customer.num }}</td>
                            <td>{{ customer.name }}</td>
                            <td>{{ customer.address }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <h4>등록된 사용자가 없습니다.</h4>

            </div>
        </div>

    </div>
</template>

<style scoped></style>