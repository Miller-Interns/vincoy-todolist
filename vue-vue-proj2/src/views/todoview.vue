<template>
  <div class="todo-container">
    <h1>To-Do Categories</h1>
    <input v-model="newCategory" placeholder="New Category Name" />
    <button @click="addCategory">Add Category</button>

    <div v-for="category in categories" :key="category.id" class="category-box">
      <h2>{{ category.name }}</h2>
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

<script setup lang="ts">
import { ref } from 'vue'
import { useTodo } from './useTodoLogic'
import type { Category } from '../types/types'

const newCategory = ref('')
const { categories, addCategory, addItem, deleteItem, editItem } = useTodo(newCategory)
</script>

<style scoped>
.todo-container {
  padding: 20px;
}
.category-box {
  border: 1px solid #ccc;
  margin-top: 20px;
  padding: 10px;
}
.done {
  text-decoration: line-through;
}
</style>
