<template>
    <div class="todo" v-for="todo in todos" :key="todo.id" :id="todo.id">
      <div class="flex gap-5 items-center justify-center">
        <span class="randColor" :style="{background: todo.color}"></span>
        <p :class="{ 'done-todo': doneTodos.includes(todo.id) }">{{ todo.title }}</p>
      </div>
      <div class="opacity-0 hover:opacity-100 flex gap-5 items-center justify-center">
        <button @click="deleteTask(todo.id)">
          delete
        </button>
        <button class="w-5 h-5 p-2 rounded-full border-2 border-white" @click="todoDone(todo.id)"></button>
      </div>
    </div>
</template>

<style scoped>
.todo {
  @apply bg-purpleGray rounded-2xl p-5 flex items-center justify-between shadow shadow-2xl;
}

.randColor {
  @apply p-2 w-2 h-2 rounded-full;
}

.done-todo {
  text-decoration: line-through; 
}
</style>

<script>
export default {
  props: ['todos'],
  data() {
    return {
      doneTodos: JSON.parse(window.localStorage.getItem('doneTodos')) || [],
      renderKey: 0
    };
  },
  methods: {
    deleteTask(id) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
        window.localStorage.setItem('allTodos', JSON.stringify(this.todos));
        this.renderKey += 1; // Increment the key to force a re-render
      }
    },
    todoDone(id) {
      const index = this.doneTodos.indexOf(id);
      const el = document.getElementById(id);
      console.log(el)
      if (index === -1) {
        this.doneTodos.push(id);
        el.children[1].children[1].classList.add('bg-green-100')
      } else {
        this.doneTodos.splice(index, 1);
        el.children[1].children[1].classList.remove('bg-green-100')
      }
      window.localStorage.setItem('doneTodos', JSON.stringify(this.doneTodos));
      this.renderKey += 1;
    }
  },
  mounted() {
    this.doneTodos.forEach(doneId => {
      const el = document.getElementById(doneId);
      if (el) {
        el.children[1].children[1].classList.add('bg-green-100')
      }
    });
  }
};
</script>
