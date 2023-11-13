<!-- TodoListItem.vue -->

<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td :class="{ 'is-done': todo.isDone }">{{ todo.text }}</td>
    <td>{{ todo.isDone == false ? "X" : "O" }}</td>
    <button @click="store.deleteTodo(todo.id)">Delete</button>
    <button @click="store.updateTodo(todo.id)">Done</button>
  </tr>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

defineProps({
  todo: Object,
});

const store = useCounterStore();
</script>

<style scoped>
.is-done {
  text-decoration: line-through;
}

td {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-left: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
button {
  margin-left: 1rem;
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
