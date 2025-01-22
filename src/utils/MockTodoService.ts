import { Todo } from "../types/types";
import { TodoService } from "./ApiTodoService";

// Dependency Inversion Principle (Принцип инверсии зависимостей)
export class MockTodoService implements TodoService {
  private todos: Todo[];

  constructor() {
    this.todos = [
      { id: 1, title: "Test Todo 1", completed: false },
      { id: 2, title: "Test Todo 2", completed: false },
    ];
  }

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async addTodo(todo: Partial<Todo>): Promise<Todo> {
    const newTodo: Todo = {
      id: Date.now(),
      title: todo.title || "Untitled",
      completed: todo.completed ?? false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  async deleteTodo(id: number): Promise<number> {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return id;
  }
}
