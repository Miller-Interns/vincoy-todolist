<script setup lang="ts">
import { ref } from 'vue'
import { useTodo } from '../composables/use-to-do'

const newCategory = ref('')
const { categories, addCategory, addItem, deleteItem, editItem, deleteCategory, editCategory } =
  useTodo(newCategory)
</script>

<template>
  <div class="todo-container">
    <h1>Add To-Do</h1>
    <input v-model="newCategory" placeholder="New Category Name" />
    <button @click="addCategory">Add Category</button>

    <div v-for="category in categories" :key="category.id" class="category-box">
      <div class="category-header">
        <h2>{{ category.name }}</h2>
        <div>
          <button class="edit-cat-btn" @click="editCategory(category.id)">Edit</button>
          <button class="delete-cat-btn" @click="deleteCategory(category.id)">
            Delete Category
          </button>
        </div>
      </div>

      <input v-model="category.newItem" placeholder="New To-Do Item" />
      <button @click="addItem(category.id)">Add Item</button>

      <ul>
        <li v-for="item in category.items" :key="item.id">
          <input type="checkbox" v-model="item.done" />
          <span :class="{ done: item.done }">{{ item.text }}</span>
          <button @click="editItem(category.id, item.id)">Edit</button>
          <button @click="deleteItem(category.id, item.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
.category-box {
  border: 1px solid #ccc;
  margin-top: 20px;
  padding: 10px;
}
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.delete-cat-btn {
  background-color: rgb(249, 31, 7);
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}
button {
  margin-left: 5px;
}
input[type='checkbox'] {
  margin-right: 8px;
}
</style>
