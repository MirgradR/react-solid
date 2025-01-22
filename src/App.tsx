import TodoList from "./components/TodoList/TodoList";
import { ApiTodoService } from "./utils/ApiTodoService";
import { MockTodoService } from "./utils/MockTodoService";

// const todoService = new ApiTodoService(); // Используем API сервис
const todoService = new MockTodoService(); // Или фиктивный сервис

function App() {
  return (
    <div>
      <TodoList todoService={todoService} />
    </div>
  );
}
export default App;
