<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-xl bg-white p-6 rounded shadow text-center">
      <h1 class="text-2xl font-bold mb-4">Todo Categories</h1>

      <!-- New Category Input -->
      <div class="mb-4">
        <input
          v-model="newCategory.value"
          @keyup.enter="addCategory"
          type="text"
          placeholder="New Category"
          class="border rounded p-2 w-2/3"
        />
        <button @click="addCategory" class="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </div>

      <!-- Categories List -->
      <div
        v-for="category in categories"
        :key="category.id"
        class="mb-6 text-left border-t pt-4"
      >
        <h2 class="text-lg font-semibold mb-2">{{ category.name }}</h2>

        <!-- New Item Input -->
        <div class="flex mb-2">
          <input
            v-model="category.newItem"
            @keyup.enter="addItem(category.id)"
            type="text"
            placeholder="New Item"
            class="border rounded p-2 w-2/3"
          />
          <button
            @click="addItem(category.id)"
            class="ml-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            +
          </button>
        </div>

        <!-- Items List -->
        <ul class="list-disc list-inside">
          <li
            v-for="item in category.items"
            :key="item.id"
            class="flex justify-between items-center mt-1"
          >
            <span :class="{ 'line-through': item.done }">{{ item.text }}</span>
            <div>
              <button
                @click="editItem(category.id, item.id)"
                class="text-sm text-yellow-500 mr-2"
              >
                Edit
              </button>
              <button
                @click="deleteItem(category.id, item.id)"
                class="text-sm text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTodo } from '@/composables/useTodo' // adjust path as needed
import type { Category } from '@/types/types'   // adjust path as needed

const newCategory = ref('')
const { categories, addCategory, addItem, deleteItem, editItem } = useTodo(newCategory)
</script>

<style scoped>
/* Optional: Cross out completed items */
.line-through {
  text-decoration: line-through;
}
</style>