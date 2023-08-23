import { useContext } from "react";
import sharedData from "../../../../context/data";
import Task from "../Task";

export default function TaskList() {
  const { getTodos } = useContext(sharedData);
  const todos = getTodos();
  return (
    <div className="w-full h-[590px] overflow-auto">
      {todos.map((todo) => {
        return <Task key={todo.id} task={todo}></Task>;
      })}
    </div>
  );
}
