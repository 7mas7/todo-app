<template>
  <form id="add-todo" @submit.prevent="addTodo">
    <input
      type="text"
      class="p-5 border-none outline-none rounded-2xl shadow shadow-2xl bg-purpleGray w-full placeholder:text-gray-300"
      placeholder="What is your new task?"
      v-model="todoText"
    />
  </form>
</template>

<style scoped>
#add-todo {
  @apply w-full flex items-center justify-center gap-2;
}
</style>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      todoText: '',
    };
  },
  methods: {
    addTodo() {
      const colors = ['#45FFCA', '#FF0060', '#79E0EE', '#FFFF00', '#B983FF'];
      const newTodo = {
        id: String(Date.now()),
        title: this.todoText,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      this.$emit('todo-added', newTodo);
      this.todoText = ''; // Clear the input after adding a new todo
    },
  },
};
</script>
