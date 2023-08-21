import { createContext, useState } from "react";
import axios from "axios";

const sharedData = createContext();

function DataProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [activeTasks, setActiveTasks] = useState(
    todos.filter((task) => !task.isFinished).length
  );

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
    fetchData();
    console.log(todos);
  };
  const data = {
    todos,
    setTodos,
    fetchData,
    addTask,
    activeTasks,
    setActiveTasks,
  };
  return <sharedData.Provider value={data}>{children}</sharedData.Provider>;
}

export default sharedData;
export { DataProvider };
