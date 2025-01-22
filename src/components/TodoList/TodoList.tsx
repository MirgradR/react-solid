import { useEffect, useState } from "react";
import { TodoService } from "../../utils/ApiTodoService";
import { Todo } from "../../types/types";

interface Props {
  todoService: TodoService;
}

// Dependency Inversion Principle (Принцип инверсии зависимостей)
const TodoList = ({ todoService }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    todoService.getTodos().then((data) => setTodos(data));
  }, [todoService]);

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
    const todo = await todoService.addTodo({ title: newTodo });
    setTodos((prevTodos) => [...prevTodos, todo]);
    setNewTodo("");
  };

  const handleDeleteTodo = async (id: number) => {
    await todoService.deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
