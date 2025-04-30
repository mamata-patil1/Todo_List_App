const todoskey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todoskey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem("todoskey", JSON.stringify(task));
};
