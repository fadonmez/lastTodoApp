import { useContext } from "react";
import sharedData from "../../../../context/data";
import Task from "../Task";

export default function TaskList() {
  const { todos } = useContext(sharedData);
  return (
    <div className="w-full">
      {todos.map((todo) => {
        return <Task key={todo.id} task={todo}></Task>;
      })}
    </div>
  );
}
