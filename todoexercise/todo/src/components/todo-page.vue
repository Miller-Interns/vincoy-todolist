<template>
  <div class="p-4">
    <h2 class="text-xl mb-4">TODO Categories</h2>
    <input v-model="newCategory" placeholder="New category title" class="border p-1" />
    <button @click="addCategory">Add Category</button>

    <div v-for="(category, index) in categories" :key="category.id" class="mt-4 border p-2">
      <input v-model="category.title" />
      <button @click="deleteCategory(index)">Delete Category</button>

      <div>
        <input v-model="category.newItem" placeholder="New item" />
        <button @click="addItem(index)">Add Item</button>

        <ul>
          <li v-for="(item, i) in category.items" :key="i">
            <input v-model="item.text" />
            <input type="checkbox" v-model="item.done" />
            <button @click="deleteItem(index, i)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newCategory = ref('')
const categories = ref([])

function addCategory() {
  if (!newCategory.value.trim()) return
  categories.value.push({
    id: Date.now(),
    title: newCategory.value,
    items: [],
    newItem: ''
  })
  newCategory.value = ''
}

function deleteCategory(index) {
  categories.value.splice(index, 1)
}

function addItem(categoryIndex) {
  const category = categories.value[categoryIndex]
  if (!category.newItem.trim()) return
  category.items.push({ text: category.newItem, done: false })
  category.newItem = ''
}

function deleteItem(catIndex, itemIndex) {
  categories.value[catIndex].items.splice(itemIndex, 1)
}
</script>

<style>
body { font-family: sans-serif; }
</style>

