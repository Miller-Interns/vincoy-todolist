import { ref, watch } from 'vue'
import type { Category } from '../types/to-do-types'

let categoryId = 0
let itemId = 0

export function useTodo(newCategory: { value: string }) {
  const STORAGE_KEY = 'todo-categories'
  const categories = ref<Category[]>([])

 
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      categories.value = JSON.parse(stored)

     
      const allItemIds = categories.value.flatMap(cat => cat.items.map(item => item.id))
      const allCategoryIds = categories.value.map(cat => cat.id)
      itemId = Math.max(0, ...allItemIds) + 1
      categoryId = Math.max(0, ...allCategoryIds) + 1
    } catch (e) {
      console.error('Failed to parse localStorage data:', e)
    }
  }


  watch(
    categories,
    () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(categories.value))
    },
    { deep: true }
  )

  const addCategory = () => {
    if (newCategory.value.trim()) {
      categories.value.push({
        id: categoryId++,
        name: newCategory.value,
        newItem: '',
        items: []
      })
      newCategory.value = ''
    }
  }

  const editCategory = (categoryId: number) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  if (category) {
    const newName = prompt('Edit category name:', category.name)
    if (newName !== null && newName.trim() !== '') {
      category.name = newName.trim()
    }
  }
}

  const addItem = (categoryId: number) => {
    const category = categories.value.find(cat => cat.id === categoryId)
    if (category && category.newItem.trim()) {
      category.items.push({
        id: itemId++,
        text: category.newItem,
        done: false
      })
      category.newItem = ''
    }
  }

  const deleteItem = (categoryId: number, itemId: number) => {
    const category = categories.value.find(cat => cat.id === categoryId)
    if (category) {
      category.items = category.items.filter(item => item.id !== itemId)
    }
  }

  const editItem = (categoryId: number, itemId: number) => {
    const category = categories.value.find(cat => cat.id === categoryId)
    const item = category?.items.find(item => item.id === itemId)
    if (item) {
      const newText = prompt('Edit item text:', item.text)
      if (newText !== null) {
        item.text = newText
      }
    }
  }

  const deleteCategory = (categoryIdToDelete: number) => {
    categories.value = categories.value.filter(cat => cat.id !== categoryIdToDelete)
  }

  return {
    categories,
    editCategory,
    addCategory,
    addItem,
    deleteItem,
    editItem,
    deleteCategory
  }
}