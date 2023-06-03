import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ setTodos, todos }) {
  return (
    <ul className="border-t border-b border-[#9ba7ff28] py-4 px-2">
      {todos.map((todo) => (
        <ToDoListItem
          key={todo.id}
          id={todo.id}
          todoText={todo.todo}
          isCompleted={todo.isCompleted}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
}
