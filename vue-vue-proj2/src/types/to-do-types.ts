 export interface TodoItem {
  id: number
  text: string
  done: boolean
}

export interface Category {
  id: number
  name: string
  newItem: string
  items: TodoItem[]
}