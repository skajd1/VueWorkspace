<script setup></script>

<template>
  <div>
    <div class="container">
      <form id="form1" class="form-horizontal">
        <slot></slot>
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
            @click="customerInsert()"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="수정"
            id="btnUpdate"
            @click="customerUpdate()"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="삭제"
            id="btnDelete"
            @click="customerDelete()"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="검색"
            id="btnUpdate"
            @click="customerSearch()"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="전체"
            id="btnUpdate"
            @click="customerAll()"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="초기화"
            id="btnInit"
            @click="init()"
          />
        </div>
      </form>
    </div>
    <hr />
  </div>
</template>

<style scoped></style>
