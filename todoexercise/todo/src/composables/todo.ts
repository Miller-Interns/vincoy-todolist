import { ref, watch, onMounted } from 'vue'
import type { Category } from '../types/types'



let categoryId = 0
let itemId = 0

const LOCAL_STORAGE_KEY = 'todo-categories'

export function useTodo(newCategory: { value: string }) {
  const categories = ref<Category[]>([])

  onMounted(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      categories.value = parsed

      categoryId = Math.max(...parsed.map((c: Category) => c.id), 0) + 1
      itemId = Math.max(0, ...parsed.flatMap((c: Category) => c.items.map((i) => i.id))) + 1
    }
  })

  watch(
    categories,
    (newVal) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newVal))
    },
    { deep: true },
  )

  const addCategory = () => {
    if (newCategory.value.trim()) {
      categories.value.push({
        id: categoryId++,
        name: newCategory.value,
        newItem: '',
        items: [],
      })
      newCategory.value = ''
    }
  }

  const addItem = (categoryId: number) => {
    const category = categories.value.find((cat) => cat.id === categoryId)
    if (category && category.newItem.trim()) {
      category.items.push({
        id: itemId++,
        text: category.newItem,
        done: false,
      })
      category.newItem = ''
    }
  }

  const deleteItem = (categoryId: number, itemId: number) => {
    const category = categories.value.find((cat) => cat.id === categoryId)
    if (category) {
      category.items = category.items.filter((item) => item.id !== itemId)
    }
  }

  const editItem = (categoryId: number, itemId: number) => {
    const category = categories.value.find((cat) => cat.id === categoryId)
    const item = category?.items.find((item) => item.id === itemId)
    if (item) {
      const newText = prompt('Edit item text:', item.text)
      if (newText !== null) {
        item.text = newText
      }
    }
  }

  return {
    categories,
    addCategory,
    addItem,
    deleteItem,
    editItem,
  }
}