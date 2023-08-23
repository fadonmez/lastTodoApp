import { useContext, useState } from "react";
import { Card, CardBody, Checkbox } from "@nextui-org/react";
import { AiOutlineClose } from "react-icons/ai";
import sharedData from "../../../../context/data";
import axios from "axios";
import cn from "classnames";

export default function Task({ task }) {
  const { todos, fetchData, handleDelete, updateTask } = useContext(sharedData);
  const [isChecked, setIsChecked] = useState(task.isFinished);
  const [isUpdate, setIsUpdate] = useState(false);
  const [value, setValue] = useState(task.todo);

  const valueChange = async () => {
    try {
      // Checkbox durumunu güncelle
      setIsChecked(!isChecked);

      // API'ye gönderilecek güncellenmiş veri
      const updatedTask = { ...task, isFinished: !isChecked };

      // Task'ın API'ye gönderilmesi
      await axios.put(`http://localhost:3000/Todos/${task.id}`, updatedTask);

      // fetchData'yi çağırarak veriyi güncelle
      fetchData();
    } catch (error) {
      console.error("Güncelleme hatası:", error);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    task.todo = value;
    updateTask(task.id, task);
    setIsUpdate(false);
  };

  return (
    <Card radius="none">
      <CardBody className="grid items-center justify-center grid-cols-12">
        <Checkbox
          isSelected={isChecked}
          className="col-span-1"
          color="primary"
          onValueChange={valueChange}
        ></Checkbox>

        {isUpdate ? (
          <form
            aria-label="Update Mode"
            onSubmit={handleUpdate}
            className="w-full col-span-10"
          >
            <input
              aria-label="Update Mode"
              type="text"
              className="w-full p-2.5 outline-none border border-gray-500 rounded select-all"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        ) : (
          <button
            aria-label="Update Mode"
            onClick={() => setIsUpdate(true)}
            className={cn(
              "col-span-10 text-start",
              isChecked ? "pointer-events-none" : "pointer-events-auto"
            )}
          >
            <p className={cn("col-span-10", { "line-through": isChecked })}>
              {task.todo}
            </p>
          </button>
        )}
        <button
          onClick={() => handleDelete(task.id)}
          type="submit"
          className="col-span-1 text-gray-300 transition-colors hover:text-red-500"
        >
          <AiOutlineClose size={20} />
        </button>
      </CardBody>
    </Card>
  );
}
