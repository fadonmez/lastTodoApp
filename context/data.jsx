import { createContext, useState } from "react";
import axios from "axios";

const sharedData = createContext();

function DataProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [activeTasks, setActiveTasks] = useState(
    todos.filter((task) => !task.isFinished).length
  );
  const [mode, setMode] = useState("all");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Todos");
      const todosData = response.data;
      setTodos(todosData);
    } catch (error) {
      console.error("Veri alma hatası:", error);
    }
  };

  const addTask = async (task) => {
    await axios.post("http://localhost:3000/Todos", task);
    console.log("Task added to server");
    fetchData();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/Todos/${id}`);
    fetchData();
    console.log(todos);
  };

  const updateTask = async (id, updatedTask) => {
    await axios.put(`http://localhost:3000/Todos/${id}`, updatedTask);
    fetchData();
    console.log(todos);
  };

  const getTodos = () => {
    switch (mode) {
      case "all":
        return todos;
      case "active":
        return todos.filter((task) => !task.isFinished);
      case "completed":
        return todos.filter((task) => task.isFinished);
      default:
        return todos;
    }
  };

  const data = {
    todos,
    setTodos,
    fetchData,
    addTask,
    activeTasks,
    setActiveTasks,
    handleDelete,
    updateTask,
    mode,
    setMode,
    getTodos,
  };
  return <sharedData.Provider value={data}>{children}</sharedData.Provider>;
}

export default sharedData;
export { DataProvider };
