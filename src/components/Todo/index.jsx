import { useState, useEffect, useContext } from "react";
import styles from "./index.module.css";
import Title from "./Title";
import { Input, button } from "@nextui-org/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import TaskList from "./TaskList";
import sharedData from "../../../context/data";
import Footer from "./Footer";
import Progress from "./Progress";
export default function Todo() {
  const { fetchData, todos, addTask, activeTasks, setActiveTasks } =
    useContext(sharedData);
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value != "") {
      const newTask = {
        todo: value,
        value: 10,
        isFinished: false,
      };
      addTask(newTask);
      setValue("");
    } else {
      alert("Please enter a task");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Aktif görev sayısını hesaplama
    const activeTaskCount = todos.filter((task) => !task.isFinished).length;
    setActiveTasks(activeTaskCount.toString());

    // Görevlerin yüzdelik değerlerini toplama
    let totalPercentage = 0;
    todos.forEach((task) => {
      if (task.isFinished) {
        totalPercentage += task.value;
      }
    });
    setPercentage(totalPercentage);
  }, [todos]);

  return (
    <div className={styles.main}>
      <Title title="todos" />
      <div className={styles.card}>
        <form className="w-full" onSubmit={handleSubmit}>
          <Input
            radius="none"
            placeholder="What needs to be done?"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            startContent={
              <button
                type="button"
                className="transition-all hover:scale-125"
                onClick={() => console.log("clicked")}
              >
                <AiOutlineArrowDown
                  size={20}
                  color="#ccc"
                  className="flex-shrink-0 text-xl pointer-events-none text-default-400"
                />
              </button>
            }
          />
        </form>
        <TaskList />
        <Footer activeTasks={activeTasks} />
      </div>
      <div className={styles.card}>
        <Progress percentage={percentage} />
      </div>
    </div>
  );
}
