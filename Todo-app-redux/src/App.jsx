import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./redux/todoSlice";

function App() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const todoData = useSelector((store) => store.todos.todoItems);

  const handleAdd = () => {
    if (inputRef.current.value.trim() !== "") {
      dispatch(addTodo(inputRef.current.value));
      inputRef.current.value = "";
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Input and Add Button */}
        <div className="flex space-x-4 mb-8">
          <input
            type="text"
            ref={inputRef}
            placeholder="Add a new todo"
            className="flex-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Todo
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {todoData.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <li className="text-gray-700">{todo.title}</li>
              <button
                onClick={() => handleRemove(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;