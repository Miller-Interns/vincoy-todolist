export type TodoItem = { 
  id: number;
  text: string;
  done: boolean;
};

export type Category = { 
  id: number;
  name: string;
  newItem: string;
  items: TodoItem[];
};