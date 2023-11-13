<!-- TodoList.vue -->

<template>
  <div>
    <h2>Todo List</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Text</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        <TodoListItem v-for="todo in store.todos" :key="todo.id" :todo="todo" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import TodoListItem from "@/components/TodoListItem.vue";

const store = useCounterStore();
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: 1px solid #ccc;
  width: 50%;
}
th {
  border-right: 1px solid #ccc;
  background-color: #eee;
  padding-right: 5rem;
  padding-left: 5rem;
}
</style>
