const todoKey = "reactTodoKey";

export function setLocalStorageData(task) {
  return localStorage.setItem(todoKey, JSON.stringify(task));
}

export function getLocalStorageData() {
  const initialData = localStorage.getItem(todoKey);
  if (!initialData) return [];

  return JSON.parse(initialData);
}
