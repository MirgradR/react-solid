export interface TodoService {
  getTodos(): Promise<Todo[]>;
  addTodo(todo: Partial<Todo>): Promise<Todo>;
  deleteTodo(id: number): Promise<number>;
}

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
// Dependency Inversion Principle (Принцип инверсии зависимостей)
export class ApiTodoService implements TodoService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "https://jsonplaceholder.typicode.com/todos";
  }

  async getTodos(): Promise<Todo[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) throw new Error("Failed to fetch todos");
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async addTodo(todo: Partial<Todo>): Promise<Todo> {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      const data: Todo = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteTodo(id: number): Promise<number> {
    try {
      await fetch(`${this.apiUrl}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
