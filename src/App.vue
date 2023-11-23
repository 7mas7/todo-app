<template>
  <div id="todo-container">
    <AddTodo @todo-added="addTodo" />
    <div class="flex flex-col gap-5 mt-5">
      <Todo :todos="allTodos" />
    </div>
  </div>
</template>

<style scoped>
#todo-container {
  @apply p-5;
}
</style>

<script>
import AddTodo from './components/AddTodo.vue';
import Todo from './components/Todo.vue';

export default {
  name: 'App',
  components: {
    AddTodo,
    Todo,
  },
  data() {
    return {
      allTodos: JSON.parse(window.localStorage.getItem('allTodos')) || [],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.allTodos.push(newTodo);
      this.saveTodos();
    },
    saveTodos() {
      window.localStorage.setItem('allTodos', JSON.stringify(this.allTodos));
    },
  },
};
</script>
